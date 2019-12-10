self.__precacheManifest = [
  {
    "url": "/frontend/_next/static/_SultIL3TW1jIP6gimJ4E/pages/_app.js",
    "revision": "aa31b373f581d1c24e6f"
  },
  {
    "url": "/frontend/_next/static/_SultIL3TW1jIP6gimJ4E/pages/_error.js",
    "revision": "10e800e96ada49d2c7e2"
  },
  {
    "url": "/frontend/_next/static/_SultIL3TW1jIP6gimJ4E/pages/index.js",
    "revision": "eb6092455ffa2af3eff2"
  },
  {
    "url": "/frontend/_next/static/_SultIL3TW1jIP6gimJ4E/pages/page1.js",
    "revision": "9176ccd521ff921aaa45"
  },
  {
    "url": "/frontend/_next/static/_SultIL3TW1jIP6gimJ4E/pages/page2.js",
    "revision": "8ad53a86c06293049bb8"
  },
  {
    "url": "/frontend/_next/static/chunks/commons.aede1c8eb451c8ae9e5d.js",
    "revision": "2222a9a95e3f47ae4e56"
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
