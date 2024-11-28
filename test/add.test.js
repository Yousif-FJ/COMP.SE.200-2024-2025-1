import assert from 'assert';
import add from '../src/add.js';

describe('add', function () {
  it('should add 2 numbers', function () {
    assert.equal(add(2, 3), 5);
  });
});