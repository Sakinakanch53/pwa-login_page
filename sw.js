const staticCache = 'static-site'
const assets = [

    'index.html',
]
self.addEventListener('install', event => {
    console.log("worker installed")
    event.waitUtil(
        caches.open(staticCache).then(cache => {
            console.log("caching assets")
            cache.addAll(assets)
        })
    )
})

self.addEventListener('activate', event => {
    console.log("worker activated")
})

self.addEventListener('fetch', event => {
    console.log("fetch fired", event)
    event.respondWith(
        caches.match(event.request).then(res => {
            return res || fetch(event.request)
        })
    )
})

/*const filesToCache = [
    'index.html',
    '404.html',
    'style.css',
    'girl1.png',
    'offline.png',
];

const staticCache = 'our-first-cache';

self.addEventListener('install', event => {
    console.log('attempting to install service worker and cache static assets')
    event.waitUntil(
        caches.open(staticCache)
        .then(cache => {
            return cache.addAll(filesToCache);
        })
    );
})


self.addEventListener('fetch', event => {
    console.log("fetch fired", event)
    event.respondWith(
        caches.match(event.request).then(res => {
            return res || fetch(event.request)
        })
    )
})*/

/*self.addEventListener('fetch', event => {
    console.log('fetch event for ', event.request.url);
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
                console.log('found', event.request.url, 'in cache');
                return response;
            }
            console.log('network request for', event.request.url);
            return fetch(event.request)
                .then(response => {
                    return caches.open(staticCache)
                        .then(cache => {
                            cache.put(event.request.url, response.clone());
                            return response;
                        })
                })


        })
        .catch(err => {
            console.error(err);
            return cache.match('offline.html');
        })
    )
})*/