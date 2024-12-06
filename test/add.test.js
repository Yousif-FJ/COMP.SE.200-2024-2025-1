import assert from 'assert';
import add from '../src/add.js';

describe('add', function () {
  it('should add 2 numbers', function () {
    assert.equal(add(2, 3), 5);
  });

  it('should add negative numbers', function () {
    assert.equal(add(-2, -3), -5);
  });

  it('should add a positive and a negative number', function () {
    assert.equal(add(2, -3), -1);
  });

  it('should add zero', function () {
    assert.equal(add(2, 0), 2);
    assert.equal(add(0, 3), 3);
  });

  it('should add decimal numbers', function () {
    assert.equal(add(2.5, 3.1), 5.6);
  });
});