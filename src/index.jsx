/* globals document */

const React = require('react');
const ReactDOM = require('react-dom');
require('./styles/normalize.css');
require('./styles/main.css');
const MyComponent = require('./components/component');

ReactDOM.render(<MyComponent />, document.querySelector('.container'));
