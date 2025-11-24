// Service Worker for caching and offline support
// Experimental mode: NO caching for CSS/JS - always fetch fresh
const SW_VERSION = "2.3.0-zero-cache";
const CACHE_NAME = `sss-hospital-${SW_VERSION}`;

// Only cache truly static assets (favicons only - no CSS/JS/HTML/Images)
// Minimal caching for experimentation
const PRECACHE_URLS = ["/favicon-192x192.png", "/favicon-512x512.png"];

// Install event - cache critical assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up ALL old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        // Delete all caches except the current one
        return cacheNames.filter((cacheName) => cacheName !== CACHE_NAME);
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

// Fetch event - Professional strategy: Network-first for all dynamic assets
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

  // Only use cache-first for favicons (truly static)
  const isFavicon = url.pathname.includes("favicon");

  if (isFavicon) {
    // CACHE-FIRST only for favicons
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
    return;
  }

  // NETWORK-FIRST strategy for everything else (HTML, CSS, JS, images)
  // This ensures fresh content on every deployment
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Don't cache - always fetch fresh
        // Vite already handles build hashing for cache busting
        return response;
      })
      .catch(() => {
        // If offline, try cache as fallback
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Return basic offline page for HTML requests
          if (event.request.destination === "document") {
            return new Response(
              "<html><body><h1>Offline</h1><p>Please check your internet connection.</p></body></html>",
              {
                status: 503,
                headers: { "Content-Type": "text/html" },
              }
            );
          }
          return new Response("Offline", { status: 503 });
        });
      })
  );
});
