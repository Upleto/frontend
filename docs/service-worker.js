self.__precacheManifest = [
  {
    "url": "/frontend/_next/static/SM_kR3hxIPLDiXEu-68uS/pages/_app.js",
    "revision": "8a0f36f2c31084a9fb5f"
  },
  {
    "url": "/frontend/_next/static/SM_kR3hxIPLDiXEu-68uS/pages/_error.js",
    "revision": "8560cc601a36984a38cd"
  },
  {
    "url": "/frontend/_next/static/SM_kR3hxIPLDiXEu-68uS/pages/index.js",
    "revision": "992070d3e0c630d393e9"
  },
  {
    "url": "/frontend/_next/static/SM_kR3hxIPLDiXEu-68uS/pages/lease-agreement.js",
    "revision": "be30eaa0f1736d8fe583"
  },
  {
    "url": "/frontend/_next/static/SM_kR3hxIPLDiXEu-68uS/pages/login-register.js",
    "revision": "22670887990c0ec2cfab"
  },
  {
    "url": "/frontend/_next/static/SM_kR3hxIPLDiXEu-68uS/pages/page1.js",
    "revision": "bcf4fc0469fc59981a58"
  },
  {
    "url": "/frontend/_next/static/SM_kR3hxIPLDiXEu-68uS/pages/page2.js",
    "revision": "01eb9dd3f31cf13aa184"
  },
  {
    "url": "/frontend/_next/static/SM_kR3hxIPLDiXEu-68uS/pages/payment.js",
    "revision": "0d5f1d38e998064b193c"
  },
  {
    "url": "/frontend/_next/static/SM_kR3hxIPLDiXEu-68uS/pages/renter.js",
    "revision": "788a4d2699056fd26888"
  },
  {
    "url": "/frontend/_next/static/chunks/commons.6881ccbb291c7e8620e2.js",
    "revision": "3207618ac8a633180290"
  },
  {
    "url": "/frontend/_next/static/runtime/main-62f7bc2e90d01265d999.js",
    "revision": "7c3dfbc4e5d9331d52ea"
  },
  {
    "url": "/frontend/_next/static/runtime/polyfills-f5af81b00d12d923ec0f.js",
    "revision": "c133b2cadab912d169ad"
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
