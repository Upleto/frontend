const { name, keywords } = require('../package.json');

const displayName = 'upleto';
const themeColor = 'red';

const isProd = process.env.NODE_ENV === 'production';
const prodAssetPrefix = '/' + name;
const serviceWorkerFilename = 'service-worker.js';
const commonKeywords = keywords.join(',');

module.exports = {
  linkPrefix: isProd ? prodAssetPrefix : '',
  isProd,
  prodAssetPrefix,
  serviceWorkerFilename,
  displayName,
  themeColor,
};
