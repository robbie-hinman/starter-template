const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const data = require('./data');

module.exports = {
  context: __dirname,
  entry: 'entry.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data),
  ],
  module: {
    // 'preloaders' called because we want the eslint check to be on the code before it gets bundled
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    }],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },
};
