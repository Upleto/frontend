// next.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
const withOffline = require('next-offline');
const withManifest = require('next-manifest');
const publicRuntimeConfig = require('./configs/publicRuntimeConfig');

const {
  displayName,
  themeColor,
  linkPrefix,
  prodAssetPrefix,
  serviceWorkerFilename,
  png192Path,
  png512Path,
} = publicRuntimeConfig;

module.exports = withManifest(
  withOffline({
    // service-worker settings
    registerSwPrefix: prodAssetPrefix,
    scope: `${prodAssetPrefix}/`,
    workboxOpts: {
      swDest: serviceWorkerFilename,
      globPatterns: ['app/static/**/*'],
      globDirectory: '.',
      exclude: ['**/node_modules/**/*'],
      modifyURLPrefix: {
        app: linkPrefix,
      },
      navigationPreload: true,
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'offlineCache',
            networkTimeoutSeconds: 15,
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: ({ event }) => event.request.mode === 'navigate',
          handler: 'CacheFirst',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },

    manifest: {
      /* eslint-disable @typescript-eslint/camelcase */
      output: './public/static',
      short_name: displayName,
      name: displayName,
      start_url: `${prodAssetPrefix}/`,
      background_color: themeColor,
      display: 'standalone',
      scope: `${prodAssetPrefix}/`,
      dir: 'ltr',
      theme_color: themeColor,
      icons: [
        {
          src: `${prodAssetPrefix}${png192Path}`,
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: `${prodAssetPrefix}${png512Path}`,
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      /* eslint-enable @typescript-eslint/camelcase */
    },

    // cdn settings
    assetPrefix: linkPrefix,
    amp: {
      canonicalBase: linkPrefix,
    },
    publicRuntimeConfig,
  })
);
