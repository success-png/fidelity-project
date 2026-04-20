const CACHE_NAME = 'fidelity-pwa-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/logo-icon.svg',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - implement cache first strategy for static assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Cache first for static assets and same-origin requests
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then((response) => {
        // Return cached version if available
        if (response) {
          console.log('Service Worker: Serving from cache:', request.url);
          return response;
        }

        // Otherwise fetch from network
        return fetch(request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response since it can only be consumed once
          const responseToCache = response.clone();

          // Cache the fetched resource for future
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });

          return response;
        });
      }).catch(() => {
        // Offline fallback for HTML pages
        if (request.mode === 'navigate') {
          return caches.match('/');
        }
        
        // For other requests, return a basic offline response
        return new Response(
          JSON.stringify({ 
            error: 'Offline', 
            message: 'No internet connection. Please check your network and try again.' 
          }),
          {
            status: 503,
            statusText: 'Service Unavailable',
            headers: { 'Content-Type': 'application/json' }
          }
        );
      })
    );
  } else {
    // For external API calls, don't cache - let them fail naturally
    event.respondWith(fetch(request));
  }
});

// Handle background sync for offline actions (optional)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle any background sync tasks here
      console.log('Service Worker: Background sync completed')
    );
  }
});

// Handle push notifications (optional)
self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-192x192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };

    event.waitUntil(
      self.registration.showNotification('Fidelity Financial Assistant', options)
    );
  }
});
