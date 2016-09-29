const webpackConfig = require('./webpack.config.js');

webpackConfig.entry = {};

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['mocha'],

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 300,

    files: [
     //  './src/**/*.js',
      './test/**/*.spec.js'],

    preprocessors: {
     //  './src/**/*.js': ['babel'],
      './test/**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
};
