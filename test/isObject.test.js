import assert from 'assert';
import isObject from '../src/isObject.js';

describe('isObject', function(){
    it('should return true for objects', function() {
        assert.strictEqual(isObject({}), true);
    });

    it('should return true for arrays', function() {
        assert.strictEqual(isObject([1, 2, 3]), true);
    });

    it('should return true for functions', function() {
        assert.strictEqual(isObject(function() {}), true);
    });

    it('should return true for regexes', function() {
        assert.strictEqual(isObject(/abc/), true);
    });

    it('should return true for new Number(0)', function() {
        assert.strictEqual(isObject(new Number(0)), true);
    });

    it('should return true for new String(\'\')', function() {
        assert.strictEqual(isObject(new String('')), true);
    });

    it('should return false for null', function() {
        assert.strictEqual(isObject(null), false);
    });

    it('should return false for undefined', function() {
        assert.strictEqual(isObject(undefined), false);
    });

    it('should return false for primitives', function() {
        assert.strictEqual(isObject(1), false);
        assert.strictEqual(isObject('string'), false);
        assert.strictEqual(isObject(true), false);
    });

    it('should return false for symbols', function() {
        assert.strictEqual(isObject(Symbol('symbol')), false);
    });
});