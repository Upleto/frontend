self.__precacheManifest = [
  {
    "url": "/frontend/_next/static/De598d9OH8ovzR4nS8A-h/pages/_app.js",
    "revision": "274dd677462d70c4c8d8"
  },
  {
    "url": "/frontend/_next/static/De598d9OH8ovzR4nS8A-h/pages/_error.js",
    "revision": "b6eabf30c34271d0ae79"
  },
  {
    "url": "/frontend/_next/static/De598d9OH8ovzR4nS8A-h/pages/index.js",
    "revision": "21910b9ad5a215af498a"
  },
  {
    "url": "/frontend/_next/static/De598d9OH8ovzR4nS8A-h/pages/lease-agreement.js",
    "revision": "8e6f0dbd1252a541fa29"
  },
  {
    "url": "/frontend/_next/static/De598d9OH8ovzR4nS8A-h/pages/login-register.js",
    "revision": "41d52e64e860f84286b8"
  },
  {
    "url": "/frontend/_next/static/De598d9OH8ovzR4nS8A-h/pages/page1.js",
    "revision": "d86b591f947bbeb1c092"
  },
  {
    "url": "/frontend/_next/static/De598d9OH8ovzR4nS8A-h/pages/page2.js",
    "revision": "8277c859c82be36d7c81"
  },
  {
    "url": "/frontend/_next/static/De598d9OH8ovzR4nS8A-h/pages/payment.js",
    "revision": "e6ad379f4227abf92da3"
  },
  {
    "url": "/frontend/_next/static/De598d9OH8ovzR4nS8A-h/pages/renter.js",
    "revision": "3cb0671e3ff45f16f593"
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
