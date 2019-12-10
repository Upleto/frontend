self.__precacheManifest = [
  {
    "url": "/frontend/_next/static/chunks/commons.4343936bd4f72d4b7bed.js",
    "revision": "8d8df71a81aa392a6195"
  },
  {
    "url": "/frontend/_next/static/icsbkge37VWu6QoKiVCRq/pages/_app.js",
    "revision": "3c0076633b002805ef81"
  },
  {
    "url": "/frontend/_next/static/icsbkge37VWu6QoKiVCRq/pages/_error.js",
    "revision": "10b1c688f04acddb42ca"
  },
  {
    "url": "/frontend/_next/static/icsbkge37VWu6QoKiVCRq/pages/index.js",
    "revision": "8ccd00a57de509488bbf"
  },
  {
    "url": "/frontend/_next/static/icsbkge37VWu6QoKiVCRq/pages/page1.js",
    "revision": "e68356dc8881c77d5541"
  },
  {
    "url": "/frontend/_next/static/icsbkge37VWu6QoKiVCRq/pages/page2.js",
    "revision": "dd5c3c04f6915649c926"
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
