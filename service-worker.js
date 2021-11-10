const cache_name = 'nentendo-cache';
var precache = [
    '/index.html',
    '/css/style.css',
    '/css/responsiveStyles.css',
    '/js/main.js',
    '/img/logo.png',
    '/fonts/PressStart2P-Regular.ttf'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cache_name)
      .then(function(cache) {
        return cache.addAll(precache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            if(!response || response.status !== 200) {
              return response;
            }

            var responseToCache = response.clone();

            caches.open(cache_name)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        )
      })
    );
});

self.addEventListener('push', function (event) {
    const notification = event.data.json();
    event.waitUntil(
        self.registration.showNotification(notification.title, { body: notification.text })
    )
})