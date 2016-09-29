const path = require('path');
const validate = require('webpack-validator'); // eslint-disable-line import/no-extraneous-dependencies

// const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
// const data = require('./data');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const myconfig = {
  context: __dirname,
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  // plugins: [
  //   new StaticSiteGeneratorPlugin('bundle.js', data.routes, data),
  // ],
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
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
    }],
  },
};

validate(myconfig);
module.exports = myconfig;
