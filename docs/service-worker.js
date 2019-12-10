self.__precacheManifest = [
  {
    "url": "/frontend/_next/static/RRLyD4CGEEpXPIdIl9dDQ/pages/_app.js",
    "revision": "a5f9730c8cb9f11cfcf5"
  },
  {
    "url": "/frontend/_next/static/RRLyD4CGEEpXPIdIl9dDQ/pages/_error.js",
    "revision": "1c820deabe7c312a0d15"
  },
  {
    "url": "/frontend/_next/static/RRLyD4CGEEpXPIdIl9dDQ/pages/index.js",
    "revision": "99cb31dcae66eb63a50a"
  },
  {
    "url": "/frontend/_next/static/RRLyD4CGEEpXPIdIl9dDQ/pages/page1.js",
    "revision": "f01c132870322f684cc1"
  },
  {
    "url": "/frontend/_next/static/RRLyD4CGEEpXPIdIl9dDQ/pages/page2.js",
    "revision": "60d86bb844484b20e3ba"
  },
  {
    "url": "/frontend/_next/static/chunks/commons.7238cab53b0a2f71dd4c.js",
    "revision": "df5f0234dfc285f7e1f3"
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
