self.__precacheManifest = [
  {
    "url": "/frontend/_next/static/0bL1ZmZ4cpa_EhSTqRRVd/pages/_app.js",
    "revision": "6ec8db67f6bdfda8b5a3"
  },
  {
    "url": "/frontend/_next/static/0bL1ZmZ4cpa_EhSTqRRVd/pages/_error.js",
    "revision": "8d0929927e1fc4219b2e"
  },
  {
    "url": "/frontend/_next/static/0bL1ZmZ4cpa_EhSTqRRVd/pages/index.js",
    "revision": "fa3f7dffb8b2fdb1a1f2"
  },
  {
    "url": "/frontend/_next/static/0bL1ZmZ4cpa_EhSTqRRVd/pages/page1.js",
    "revision": "d21daefd5bd273ff720d"
  },
  {
    "url": "/frontend/_next/static/0bL1ZmZ4cpa_EhSTqRRVd/pages/page2.js",
    "revision": "eacc3913a8eaf6725deb"
  },
  {
    "url": "/frontend/_next/static/chunks/commons.e095f856212f243350eb.js",
    "revision": "1381f513a07eb4601ee5"
  },
  {
    "url": "/frontend/_next/static/runtime/main-5ffb87fdeca77a49c41f.js",
    "revision": "30bad19c4ae2355a3987"
  },
  {
    "url": "/frontend/_next/static/runtime/polyfills-2fff68c13affbed5c162.js",
    "revision": "54d0d9ac7e0954ddda88"
  },
  {
    "url": "/frontend/_next/static/runtime/webpack-035ac2b14bde147cb4a8.js",
    "revision": "be4b6cc6d10632d2262c"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

workbox.navigationPreload.enable();

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(({ event }) => event.request.mode === 'navigate', new workbox.strategies.CacheFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
