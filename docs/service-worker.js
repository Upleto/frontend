self.__precacheManifest = [
  {
    "url": "/frontend/_next/static/64LAWQyWnVhWDxCZj1tWB/_buildManifest.js",
    "revision": "7251927fa32a1296d635ce77fea0bcb4"
  },
  {
    "url": "/frontend/_next/static/64LAWQyWnVhWDxCZj1tWB/pages/_app.js",
    "revision": "37c049c0761f1d774d44"
  },
  {
    "url": "/frontend/_next/static/64LAWQyWnVhWDxCZj1tWB/pages/_error.js",
    "revision": "da8b221043aba6f21c8b"
  },
  {
    "url": "/frontend/_next/static/64LAWQyWnVhWDxCZj1tWB/pages/index.js",
    "revision": "92bfe56035c0b43d94f8"
  },
  {
    "url": "/frontend/_next/static/64LAWQyWnVhWDxCZj1tWB/pages/lease-agreement.js",
    "revision": "57f78eec546c8d7bac07"
  },
  {
    "url": "/frontend/_next/static/64LAWQyWnVhWDxCZj1tWB/pages/login-register.js",
    "revision": "efdd0591bd399caa4d44"
  },
  {
    "url": "/frontend/_next/static/64LAWQyWnVhWDxCZj1tWB/pages/page1.js",
    "revision": "ec0e2cabba7af9646318"
  },
  {
    "url": "/frontend/_next/static/64LAWQyWnVhWDxCZj1tWB/pages/page2.js",
    "revision": "1f69089145d9aac446a1"
  },
  {
    "url": "/frontend/_next/static/64LAWQyWnVhWDxCZj1tWB/pages/payment.js",
    "revision": "10b7c3a6bdf75158522c"
  },
  {
    "url": "/frontend/_next/static/64LAWQyWnVhWDxCZj1tWB/pages/renter.js",
    "revision": "c40c7e9dee28662e8e04"
  },
  {
    "url": "/frontend/_next/static/chunks/2852872c.3240159d749ec1820008.js",
    "revision": "da70dc72cea2897f8455"
  },
  {
    "url": "/frontend/_next/static/chunks/36358f6210d62ebd06d328239cd9434f37411713.ffa30e7058e4df01f533.js",
    "revision": "cf897a7702436468e013"
  },
  {
    "url": "/frontend/_next/static/chunks/743da9929666bffa076296e87d92da02a6938938.db67b7ad80c57d4c25b1.js",
    "revision": "92f3fc1dd50efabd038e"
  },
  {
    "url": "/frontend/_next/static/chunks/7bcfc32310c08a1f2f4c559397998ad5dba28c2e.00b7efdd83f9a57a93fc.js",
    "revision": "13be2f9277666177b4e2"
  },
  {
    "url": "/frontend/_next/static/chunks/93182e616b4693ccb7eeabecd33ca94ff2ef66f8.89ba2b95e9e79d7041ca.js",
    "revision": "bed5707cbec1f50107ad"
  },
  {
    "url": "/frontend/_next/static/chunks/commons.7a5662c2edb30e32471c.js",
    "revision": "7ff9dc11a37981cfe513"
  },
  {
    "url": "/frontend/_next/static/chunks/f286ae06282ecc9ae29860ab740a738e63f6da42.da6778cc4749eb93c17c.js",
    "revision": "38bc7fb71e5a13b0cc71"
  },
  {
    "url": "/frontend/_next/static/chunks/framework.308e38c37968bd8b614c.js",
    "revision": "515aa09bdc670ff4e4fa"
  },
  {
    "url": "/frontend/_next/static/runtime/main-65bc3a3e67a8460f3a1c.js",
    "revision": "4878def8131c22f80517"
  },
  {
    "url": "/frontend/_next/static/runtime/polyfills-c5ee4542c91ead450c4c.js",
    "revision": "1bd96647a923ab3a3056"
  },
  {
    "url": "/frontend/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",
    "revision": "04cb911a52af21884f6c"
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
