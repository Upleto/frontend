self.__precacheManifest = [
  {
    "url": "/frontend/_next/static/1RR44HSU2mhkIu1NpHTWE/pages/_app.js",
    "revision": "e18fe2f31e0dc4aed97c"
  },
  {
    "url": "/frontend/_next/static/1RR44HSU2mhkIu1NpHTWE/pages/_error.js",
    "revision": "84163a0195ca0e345c0a"
  },
  {
    "url": "/frontend/_next/static/1RR44HSU2mhkIu1NpHTWE/pages/index.js",
    "revision": "a07133c85ba2f7d11b73"
  },
  {
    "url": "/frontend/_next/static/1RR44HSU2mhkIu1NpHTWE/pages/lease-agreement.js",
    "revision": "c2504d24a2e31d7c5785"
  },
  {
    "url": "/frontend/_next/static/1RR44HSU2mhkIu1NpHTWE/pages/login-register.js",
    "revision": "8bc73684cb8522777923"
  },
  {
    "url": "/frontend/_next/static/1RR44HSU2mhkIu1NpHTWE/pages/page1.js",
    "revision": "7d17b5c38f562544764d"
  },
  {
    "url": "/frontend/_next/static/1RR44HSU2mhkIu1NpHTWE/pages/page2.js",
    "revision": "d6c284c00566a9c11b00"
  },
  {
    "url": "/frontend/_next/static/1RR44HSU2mhkIu1NpHTWE/pages/payment.js",
    "revision": "872f852419def2ffac9a"
  },
  {
    "url": "/frontend/_next/static/1RR44HSU2mhkIu1NpHTWE/pages/renter.js",
    "revision": "7c1dc94189ef3d7eda8b"
  },
  {
    "url": "/frontend/_next/static/chunks/commons.b1b767909e82d23759f3.js",
    "revision": "c2f45c3841075804beaf"
  },
  {
    "url": "/frontend/_next/static/runtime/main-98a1fac3723b2e1098a4.js",
    "revision": "b5daf0194eb84bf1246b"
  },
  {
    "url": "/frontend/_next/static/runtime/polyfills-ad5933a8045e80e683a7.js",
    "revision": "7627543a62ec41589546"
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
