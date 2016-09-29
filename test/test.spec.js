/**
 * Created by robbie on 9/3/16.
 */
/* eslint-env mocha */

const { expect } = require('chai'); // eslint-disable-line import/no-extraneous-dependencies
const util = require('../src/utils/util');

// const { shallow, mount } = require('enzyme');

// shallow renderings just renders what is in Search and not its children (ex ShowCard)
// checkout 'power assert'
describe('util test', () => {
  it('should add 2 numbers', () => {
    expect(util.sum(1, 2)).to.equal(3);
  });
});
