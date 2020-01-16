self.__precacheManifest = [
  {
    "url": "/frontend/_next/static/Sr3NQaFGuGKpryiGrsLLH/pages/_app.js",
    "revision": "44d1bda69752de7d86c4"
  },
  {
    "url": "/frontend/_next/static/Sr3NQaFGuGKpryiGrsLLH/pages/_error.js",
    "revision": "b60dd3534458cff2a146"
  },
  {
    "url": "/frontend/_next/static/Sr3NQaFGuGKpryiGrsLLH/pages/index.js",
    "revision": "3c842234fc4352563af8"
  },
  {
    "url": "/frontend/_next/static/Sr3NQaFGuGKpryiGrsLLH/pages/lease-agreement.js",
    "revision": "db5c9fe52b15de493c78"
  },
  {
    "url": "/frontend/_next/static/Sr3NQaFGuGKpryiGrsLLH/pages/login-register.js",
    "revision": "ce8da02047ecad3a7126"
  },
  {
    "url": "/frontend/_next/static/Sr3NQaFGuGKpryiGrsLLH/pages/page1.js",
    "revision": "20358af49e84ab681e3f"
  },
  {
    "url": "/frontend/_next/static/Sr3NQaFGuGKpryiGrsLLH/pages/page2.js",
    "revision": "e900d10d06ca0fe2b3e3"
  },
  {
    "url": "/frontend/_next/static/Sr3NQaFGuGKpryiGrsLLH/pages/payment.js",
    "revision": "1d4522d21fdf850d711c"
  },
  {
    "url": "/frontend/_next/static/Sr3NQaFGuGKpryiGrsLLH/pages/renter.js",
    "revision": "86a4a663f85d01c9b20f"
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
