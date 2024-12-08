import assert from 'assert';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty', function(){
    it('should return true for null', function() {
        assert.strictEqual(isEmpty(null), true);
    });

    it('should return true for boolean values', function() {
        assert.strictEqual(isEmpty(true), true);
        assert.strictEqual(isEmpty(false), true);
    });

    it('should return true for numbers', function() {
        assert.strictEqual(isEmpty(0), true);
        assert.strictEqual(isEmpty(1), true);
    });

    it('should return false for non-empty arrays', function() {
        assert.strictEqual(isEmpty([1, 2, 3]), false);
    });

    it('should return false for non-empty strings', function() {
        assert.strictEqual(isEmpty('abc'), false);
    });

    it('should return false for objects with properties', function() {
        assert.strictEqual(isEmpty({ 'a': 1 }), false);
    });

    it('should return false for non-empty maps', function() {
        const map = new Map([['key', 'value']]);
        assert.strictEqual(isEmpty(map), false);
    });

    it('should return false for non-empty sets', function() {
        const set = new Set([1, 2, 3]);
        assert.strictEqual(isEmpty(set), false);
    });

    it('should return true for objects with no own properties', function() {
        const obj = Object.create(null);
        assert.strictEqual(isEmpty(obj), true);
    });

    it('should return false for objects with own properties', function() {
        const obj = Object.create(null);
        obj['key'] = 'value';
        assert.strictEqual(isEmpty(obj), false);
    });

    it('should return true for objects with inherited properties but no own properties', function() {
        function Parent() {
            this.inheritedProperty = 'value';
        }
        const child = new Parent();
        assert.strictEqual(isEmpty(child), true);
    });

    it('should return false for objects with own properties and inherited ones', function() {
        function Parent() {
            this.inheritedProperty = 'value';
        }
        const child = new Parent();
        child.ownProperty = 'own';
        assert.strictEqual(isEmpty(child), false);
    });
});