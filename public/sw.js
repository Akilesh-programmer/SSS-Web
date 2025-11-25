// Service Worker for caching and offline support
// Production mode: Aggressive caching with smart strategies
const SW_VERSION = "3.0.0-optimized-cache";
const STATIC_CACHE = `sss-hospital-static-${SW_VERSION}`;
const DYNAMIC_CACHE = `sss-hospital-dynamic-${SW_VERSION}`;
const IMAGE_CACHE = `sss-hospital-images-${SW_VERSION}`;

// Cache critical static assets immediately on install
const PRECACHE_URLS = [
  "/",
  "/favicon-192x192.png",
  "/favicon-512x512.png",
  "/site.webmanifest",
  "/robots.txt",
];

// Install event - cache critical assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  const currentCaches = [STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE];

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        // Delete all caches except current versions
        return cacheNames.filter(
          (cacheName) => !currentCaches.includes(cacheName)
        );
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            console.log("[SW] Deleting old cache:", cacheToDelete);
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

// Helper: Limit cache size to prevent excessive storage usage
async function limitCacheSize(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();

  if (keys.length > maxItems) {
    // Delete oldest entries (FIFO)
    const itemsToDelete = keys.length - maxItems;
    for (let i = 0; i < itemsToDelete; i++) {
      await cache.delete(keys[i]);
    }
  }
}

// Periodically clean up image cache to prevent bloat
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "CACHE_CLEANUP") {
    limitCacheSize(IMAGE_CACHE, 100); // Keep max 100 images
    limitCacheSize(DYNAMIC_CACHE, 50); // Keep max 50 pages
  }
});

// Fetch event - Smart caching strategy based on resource type
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
  const { pathname } = url;

  // Determine resource type and cache strategy
  const isHTML =
    event.request.destination === "document" || pathname.endsWith(".html");
  const isJS =
    pathname.endsWith(".js") ||
    (pathname.includes("/assets/") && pathname.match(/\.[\w]+\.js$/));
  const isCSS =
    pathname.endsWith(".css") ||
    (pathname.includes("/assets/") && pathname.match(/\.[\w]+\.css$/));
  const isImage = pathname.match(/\.(avif|webp|jpg|jpeg|png|gif|svg)$/i);
  const isFont = pathname.match(/\.(woff|woff2|eot|ttf|otf)$/i);
  const isVideo = pathname.match(/\.(mp4|webm|ogg)$/i);
  const isStatic =
    pathname.includes("favicon") ||
    pathname.includes("manifest") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml";

  // Strategy 1: CACHE-FIRST for static assets (JS/CSS with hash, fonts, static files)
  // These have content hashes in filename, so they're immutable
  if (isJS || isCSS || isFont || isStatic) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        // Not in cache, fetch and cache
        return fetch(event.request).then((response) => {
          // Only cache successful responses
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // Strategy 2: STALE-WHILE-REVALIDATE for images
  // Show cached version immediately, update cache in background
  if (isImage) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(IMAGE_CACHE).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        });
        // Return cached version immediately if available, otherwise wait for network
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // Strategy 3: NETWORK-FIRST for HTML and videos
  // Always try network first, fallback to cache if offline
  if (isHTML || isVideo) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache HTML pages for offline access
          if (response.status === 200 && isHTML) {
            const responseToCache = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // Offline - try cache
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Return offline page for HTML requests
            if (isHTML) {
              return new Response(
                "<!DOCTYPE html><html><head><title>Offline</title><meta name='viewport' content='width=device-width,initial-scale=1'><style>body{font-family:system-ui;padding:2rem;text-align:center;color:#333}h1{color:#e53e3e}p{color:#666}</style></head><body><h1>You're Offline</h1><p>Please check your internet connection and try again.</p></body></html>",
                {
                  status: 503,
                  headers: { "Content-Type": "text/html; charset=utf-8" },
                }
              );
            }
            return new Response("Offline", { status: 503 });
          });
        })
    );
    return;
  }

  // Strategy 4: NETWORK-ONLY for everything else (API calls, etc.)
  event.respondWith(fetch(event.request));
});
