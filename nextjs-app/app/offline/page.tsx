'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Check initial status
    checkOnlineStatus();

    // Listen for online/offline events
    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkOnlineStatus);

    // Redirect to home when back online
    if (isOnline) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 2000);

      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('online', checkOnlineStatus);
      window.removeEventListener('offline', checkOnlineStatus);
    };
  }, [isOnline, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
            isOnline ? 'bg-green-100' : 'bg-red-100'
          }`}>
            <i className={`fas fa-wifi text-3xl ${
              isOnline ? 'text-green-600' : 'text-red-600'
            }`}></i>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {isOnline ? 'Reconnecting...' : 'You\'re Offline'}
        </h1>

        <p className="text-gray-600 mb-6">
          {isOnline 
            ? 'Connection restored! Redirecting you back to the app...'
            : 'Please check your internet connection and try again. Some features may still work offline.'
          }
        </p>

        {!isOnline && (
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Available Offline:</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Previously viewed content</li>
                <li>• App interface</li>
                <li>• Basic financial information</li>
              </ul>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {isOnline && (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        )}
      </div>
    </div>
  );
}
