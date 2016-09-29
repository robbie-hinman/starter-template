require('babel-register'); // eslint-disable-line import/no-extraneous-dependencies
require('babel-polyfill'); // eslint-disable-line import/no-extraneous-dependencies

// this is to create a browser-like environment for testing as if it was the browser
// global.document = require('jsdom').jsdom('<body><div id="app"></div></body>');
// global.window = document.defaultView;
// global.navigator = window.navigator;
