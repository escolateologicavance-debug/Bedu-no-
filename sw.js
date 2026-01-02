const CACHE_NAME = 'beduino-v1';
const assets = [
  './',
  './index.html',
  './quiz1.html',
  './quiz2.html',
  './quiz3.html',
  './quiz4.html',
  './quiz5.html',
  './quiz6.html',
  './quiz7.html',
  './quiz8.html',
  './quiz9.html',
  './quiz10.html',
  '.logo-192.png',
'./curiosidades.html'

];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
