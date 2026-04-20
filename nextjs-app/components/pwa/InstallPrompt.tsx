'use client';

import { useEffect, useState } from 'react';

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running as standalone PWA
    const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || 
                            (window.navigator as any).standalone === true;
    setIsStandalone(isStandaloneMode);

    // Check if iOS device
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for app installed event
    const handleAppInstalled = () => {
      setShowInstallButton(false);
      setDeferredPrompt(null);
      console.log('PWA was installed');
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  // Always show install button for testing (remove this in production)
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Don't show install button if already installed or in standalone mode (except in development)
  if (isStandalone || (!showInstallButton && !isDevelopment)) {
    return null;
  }

  // Show iOS instructions
  if (isIOS) {
    return (
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <i className="fas fa-download text-xl"></i>
          </div>
          <div>
            <h3 className="font-semibold text-sm">Install Fidelity App</h3>
            <p className="text-xs mt-1 opacity-90">
              Tap the share button and then "Add to Home Screen" to install this app.
            </p>
          </div>
          <button
            onClick={() => setShowInstallButton(false)}
            className="ml-2 text-white hover:text-gray-200"
            aria-label="Close"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    );
  }

  // Show install button for Android/Desktop
  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <i className="fas fa-download text-xl"></i>
        </div>
        <div>
          <h3 className="font-semibold text-sm">Install Fidelity App</h3>
          <p className="text-xs mt-1 opacity-90">
            Install our app for a better experience with offline support.
          </p>
          {!showInstallButton && (
            <p className="text-xs mt-1 opacity-75">
              Debug mode: Install prompt not detected
            </p>
          )}
        </div>
        <button
          onClick={() => setShowInstallButton(false)}
          className="ml-2 text-white hover:text-gray-200"
          aria-label="Close"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <button
        onClick={handleInstallClick}
        className="mt-3 w-full bg-white text-blue-600 py-2 px-4 rounded font-medium text-sm hover:bg-gray-100 transition-colors"
        disabled={!deferredPrompt}
      >
        {deferredPrompt ? 'Install App' : 'Install Not Available'}
      </button>
    </div>
  );
}
