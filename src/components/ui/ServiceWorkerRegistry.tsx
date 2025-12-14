'use client';

/**
 * Service Worker Registration
 * Enables offline functionality and caching for repeat visits
 */

import { useEffect } from 'react';

export function ServiceWorkerRegistry() {
  useEffect(() => {
    // Register service worker in production
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js').catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
    }
  }, []);

  return null;
}
