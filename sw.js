
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/css/style.css',
];


self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  
    event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('message', function(event) {
    console.log('Message received ->', event.data)
     self.clients.matchAll().then(clients => {
    clients.forEach(client => client.postMessage('Hello from SW!'));
  })
})

self.addEventListener('push', function (e) {
    var test = e.data ? e.data.text() : ''
    test = JSON.parse(test);
  var options = {
    body: test.data,
    icon: './ok.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Explore this new world',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Close',
        icon: 'images/xmark.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  );
});

self.addEventListener('sync', function (event) {
  if (event.tag == 'myFirstSync') {
    event.waitUntil(() => {
      self.registration.showNotification('Hello world!', 'sync')
    });
  }
});

self.addEventListener('periodicsync', event => {
  if (event.tag == 'get-latest-news') {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});