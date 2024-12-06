import assert from 'assert';
import at from '../src/at.js';

describe('at', function(){
    it('should return values at specified paths', function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        const result = at(object, 'a[0].b.c', 'a[1]');
        assert.deepStrictEqual(result, [3, 4]);
    });

    it('should handle non-existent paths', function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        const result = at(object, 'a[0].b.d', 'a[2]');
        assert.deepStrictEqual(result, [undefined, undefined]);
    });

    it('should work with array of paths', function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        const result = at(object, ['a[0].b.c', 'a[1]']);
        assert.deepStrictEqual(result, [3, 4]);
    });

    it('should return empty array when no paths are provided', function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        const result = at(object);
        assert.deepStrictEqual(result, []);
    });

    it('should handle null or undefined object', function() {
        assert.deepStrictEqual(at(null, 'a.b'), [undefined]);
        assert.deepStrictEqual(at(undefined, 'a.b'), [undefined]);
    });

    it('should handle complex nested paths', function() {
        const object = { a: { b: { c: { d: 42 } } } };
        const result = at(object, 'a.b.c.d');
        assert.deepStrictEqual(result, [42]);
    });

    it('should handle multiple paths', function() {
        const object = { a: 1, b: 2, c: 3 };
        const result = at(object, 'a', 'b', 'c');
        assert.deepStrictEqual(result, [1, 2, 3]);
    });
});