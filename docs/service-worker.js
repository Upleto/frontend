self.__precacheManifest = [
  {
    "url": "/frontend/_next/static/ZXuTDrqVTpfdPAPUGseLr/pages/_app.js",
    "revision": "9b452e02b3ef579e3e07"
  },
  {
    "url": "/frontend/_next/static/ZXuTDrqVTpfdPAPUGseLr/pages/_error.js",
    "revision": "16f9c7646009bb347a06"
  },
  {
    "url": "/frontend/_next/static/ZXuTDrqVTpfdPAPUGseLr/pages/index.js",
    "revision": "0fbabf31cbcd449253d4"
  },
  {
    "url": "/frontend/_next/static/ZXuTDrqVTpfdPAPUGseLr/pages/lease-agreement.js",
    "revision": "58149af5a01ab6cd5c6a"
  },
  {
    "url": "/frontend/_next/static/ZXuTDrqVTpfdPAPUGseLr/pages/login-register.js",
    "revision": "ea610910f212acb884ac"
  },
  {
    "url": "/frontend/_next/static/ZXuTDrqVTpfdPAPUGseLr/pages/page1.js",
    "revision": "a637c7ff9b7efc35f0c3"
  },
  {
    "url": "/frontend/_next/static/ZXuTDrqVTpfdPAPUGseLr/pages/page2.js",
    "revision": "df5a06c0c4328a9789f0"
  },
  {
    "url": "/frontend/_next/static/ZXuTDrqVTpfdPAPUGseLr/pages/payment.js",
    "revision": "df8a795a17bdcdee6a64"
  },
  {
    "url": "/frontend/_next/static/ZXuTDrqVTpfdPAPUGseLr/pages/renter.js",
    "revision": "8a90c101dacab253c4b2"
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
