self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('viagens-v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/icon-192.png',
          '/icon-512.png'
        ]);
      })
    );
    self.skipWaiting();
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(resposta => resposta || fetch(event.request))
    );
  });
  