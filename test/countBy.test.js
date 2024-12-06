import assert from 'assert';
import countBy from '../src/countBy.js';

describe('countBy', function(){
    it('should count numbers by even and odd', function() {
        const result = countBy([1, 2, 3, 4, 5], function(n) {
            return n % 2 === 0 ? 'even' : 'odd';
        });
        assert.deepStrictEqual(result, { 'odd': 3, 'even': 2 });
    });

    it('should count objects by a property value', function() {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ];
        const result = countBy(users, function(value) {
            return value.active;
        });
        assert.deepStrictEqual(result, { 'true': 2, 'false': 1 });
    });

    it('should return an empty object when collection is empty', function() {
        const result = countBy([], function(value) {
            return value;
        });
        assert.deepStrictEqual(result, {});
    });

    it('should handle iteratee returning undefined or null', function() {
        const collection = [null, undefined, null];
        const result = countBy(collection, function(value) {
            return value;
        });
        assert.deepStrictEqual(result, { 'null': 2, 'undefined': 1 });
    });

    it('should count items by floor value', function() {
        const result = countBy([1.1, 2.2, 3.3, 2.2], Math.floor);
        assert.deepStrictEqual(result, { '1': 1, '2': 2, '3': 1 });
    });
});