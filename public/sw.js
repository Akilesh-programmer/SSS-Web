// Service Worker for caching and offline support
// Version updated to force cache invalidation after iOS fix
const SW_VERSION = "2.0.2-ios-layout-fix";
const CACHE_NAME = `sss-hospital-${SW_VERSION}`;
const RUNTIME_CACHE = `sss-runtime-${SW_VERSION}`;

// Assets to cache immediately on install (excluding HTML to allow fresh updates)
const PRECACHE_URLS = [
  "/assets/logos/sss-full-logo.avif",
  "/assets/heroes/main-1.avif",
  "/favicon-192x192.png",
  "/favicon-512x512.png",
];

// Install event - cache critical assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter(
          (cacheName) => !currentCaches.includes(cacheName)
        );
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
      .then(() => {
        // Broadcast version to all clients
        return self.clients.matchAll({ type: "window" }).then((clients) => {
          clients.forEach((client) => {
            client.postMessage({ type: "SW_VERSION", version: SW_VERSION });
          });
        });
      })
  );
});

// Listen for skip-waiting message to activate updated SW immediately
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Fetch event - Network-first for HTML, Cache-first for assets
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip non-GET requests
  if (event.request.method !== "GET") {
    return;
  }

  const url = new URL(event.request.url);
  const isHTMLRequest =
    event.request.destination === "document" ||
    url.pathname.endsWith(".html") ||
    url.pathname === "/";

  // NETWORK-FIRST strategy for HTML files (always get fresh HTML)
  if (isHTMLRequest) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Update cache with fresh HTML
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Fallback to cached HTML if offline
          return caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || caches.match("/index.html");
          });
        })
    );
    return;
  }

  // CACHE-FIRST strategy for CSS, JS, images (static assets)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return caches.open(RUNTIME_CACHE).then((cache) => {
        return fetch(event.request)
          .then((response) => {
            // Cache successful responses
            if (response.status === 200) {
              cache.put(event.request, response.clone());
            }
            return response;
          })
          .catch(() => {
            // Return nothing if offline and not cached
            return new Response("Offline", { status: 503 });
          });
      });
    })
  );
});
