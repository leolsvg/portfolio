// Service Worker configuration for maximum performance
// This file should be at public/sw.js in your Next.js project

const CACHE_NAME = 'leorenouf-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/me.jpg',
  '/josephine.png',
  '/twodevly.png',
  '/manifest.json',
];

// Install event - cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch(() => {
        // Continue even if some resources fail to cache
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        // Return cached response and update cache in background
        if (event.request.destination === 'image' || 
            event.request.destination === 'font') {
          // Update image and font cache in background
          fetch(event.request)
            .then((freshResponse) => {
              if (freshResponse && freshResponse.status === 200) {
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, freshResponse.clone());
                });
              }
            })
            .catch(() => {
              // Network error, use cached version
            });
        }
        return response;
      }

      return fetch(event.request)
        .then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Cache successful responses for offline access
          if (event.request.destination === 'image' ||
              event.request.destination === 'font' ||
              event.request.destination === 'style') {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }

          return response;
        })
        .catch(() => {
          // Network error and no cache - return offline page or cached fallback
          return caches.match('/');
        });
    })
  );
});
