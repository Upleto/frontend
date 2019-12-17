self.__precacheManifest = [
  {
    "url": "/frontend/_next/static/1oMSxK1sIn2hCgqGPf54T/pages/_app.js",
    "revision": "49b47fd3364b2ecdf708"
  },
  {
    "url": "/frontend/_next/static/1oMSxK1sIn2hCgqGPf54T/pages/_error.js",
    "revision": "d9fc4a86f210eaeeabe2"
  },
  {
    "url": "/frontend/_next/static/1oMSxK1sIn2hCgqGPf54T/pages/index.js",
    "revision": "b8b3ac3936db94d947ec"
  },
  {
    "url": "/frontend/_next/static/1oMSxK1sIn2hCgqGPf54T/pages/login-register.js",
    "revision": "98c763c12598cf122106"
  },
  {
    "url": "/frontend/_next/static/1oMSxK1sIn2hCgqGPf54T/pages/page1.js",
    "revision": "7497e45c31c935358839"
  },
  {
    "url": "/frontend/_next/static/1oMSxK1sIn2hCgqGPf54T/pages/page2.js",
    "revision": "3f0cc35c4d106f8ad2de"
  },
  {
    "url": "/frontend/_next/static/1oMSxK1sIn2hCgqGPf54T/pages/renter.js",
    "revision": "d60ff79e82a3428bae17"
  },
  {
    "url": "/frontend/_next/static/chunks/commons.d50b0897b79b27d5d357.js",
    "revision": "3eed72d963a7cf0363e8"
  },
  {
    "url": "/frontend/_next/static/runtime/main-c10d828031bbb6190b41.js",
    "revision": "4aef48e57712cfe28725"
  },
  {
    "url": "/frontend/_next/static/runtime/polyfills-0638c93e5165546c7715.js",
    "revision": "1f353f931d91cc32f5ca"
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
