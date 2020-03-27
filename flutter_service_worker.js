'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/favicon.png": "822192bf8a1273bc5d99d2407be8c6c7",
"/manifest.json": "14789852df7963311d72b3e291df8182",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/assets/AssetManifest.json": "4d1a55fe7a9f9e733f95b0eb7dbf8a13",
"/assets/LICENSE": "ba1bef3a74af9d760215002d072d61be",
"/assets/assets/fonts/Tomorrow-Regular.ttf": "a03efb768048e9f34bf971cc4fd0856a",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/FontManifest.json": "a14e2f7d5e61f14f50a2521c8e6d68a7",
"/main.dart.js": "bbf4887c161fc4ebc9f2e6ba692c785b",
"/index.html": "5cc0b60954eaf9f29c93ad48dea9238f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
