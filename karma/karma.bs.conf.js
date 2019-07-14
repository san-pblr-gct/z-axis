/* eslint-disable camelcase */
const { customLaunchers, browsers } = require('./karma.bs.launchers');
const webpackConfig = require('../webpack/webpack.test');
const { manifest: { seed : { short_name } } } = require('../src/config/variables');

module.exports = function (config) {
  config.set({
    browserStack: {
      username: process.env.BROWSERSTACK_USER,
      accessKey: process.env.BROWSERSTACK_TOKEN,
      project: short_name,
      video: false,
    },
    customLaunchers,
    browsers,
    basePath: '..',
    singleRun: true,
    frameworks: [ 'jasmine' ],
    files: [
      './src/test.js',
    ],
    preprocessors: {
      './src/test.js': [ 'webpack', 'sourcemap' ],
    },
    reporters: [ 'dots', 'BrowserStack' ],
    webpack: webpackConfig,
  });
};