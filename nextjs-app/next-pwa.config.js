// PWA Configuration for Next.js
// This file can be used with next-pwa plugin for enhanced PWA features

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'https-calls',
        networkTimeoutSeconds: 15,
        expiration: {
          maxEntries: 150,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
  buildExcludes: [
    'chunks/images/.*.png',
    'chunks/audio/.*.mp3',
    'chunks/video/.*.mp4',
  ],
});

module.exports = withPWA({
  // Your Next.js config here
  experimental: {
    appDir: true,
  },
});
