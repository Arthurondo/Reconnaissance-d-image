const CACHE_NAME = "object-detection-pwa-v2";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/manifest.json",
  "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs",
  "https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
