importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');


// This will trigger the importScripts() for workbox.strategies and its dependencies:
workbox.loadModule('workbox-strategies');
workbox.loadModule('workbox-precaching');
workbox.loadModule('workbox-routing');

workbox.precaching.precacheAndRoute([
    { "url": "/index.html", "revision": null },
    { "url": '/css/style.css',"revision": null },
    { "url": '/css/responsiveStyles.css',"revision": null },
    { "url": '/js/main.js',"revision": null },
    { "url": '/img/logo.png',"revision": null },
    { "url": '/fonts/PressStart2P-Regular.ttf',"revision": null }
])

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
        cacheName: 'image-cache'
    })
);

workbox.routing.registerRoute(
    ({url}) => url.pathname.startsWith('/games'),
    new workbox.strategies.NetworkFirst({
        cacheName: 'rest-cache'
    })
);