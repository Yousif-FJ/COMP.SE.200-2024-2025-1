import assert from 'assert';
import filter from '../src/filter.js';

describe('filter', function(){
    it('should return an empty array when the input array is empty', function() {
        assert.deepEqual(filter([], () => true), []);
    });

    it('should return all elements that match the predicate', function() {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ];
        assert.deepEqual(filter(users, ({ active }) => active), [{ 'user': 'barney', 'active': true }]);
    });

    it('should return elements for which the predicate returns true', function() {
        const numbers = [1, 2, 3, 4, 5];
        assert.deepEqual(filter(numbers, n => n % 2 === 0), [2, 4]);
    });

    it('should handle arrays with mixed data types', function() {
        const data = [
            { 'id': 1, 'value': 'a' },
            { 'id': 2, 'value': 'b' },
            { 'id': 3, 'value': 'a' }
        ];
        assert.deepEqual(filter(data, ({ value }) => value === 'a'), [
            { 'id': 1, 'value': 'a' },
            { 'id': 3, 'value': 'a' }
        ]);
    });

    it('should return an empty array when no elements match the predicate', function() {
        const numbers = [1, 2, 3, 4, 5];
        assert.deepEqual(filter(numbers, n => n > 5), []);
    });

    it('should pass the index and array as arguments to the predicate', function() {
        const numbers = [10, 20, 30];
        const results = filter(numbers, (value, index) => value > index);
        assert.deepEqual(results, [20, 30]);
    });

    it('should return a new array and not modify the original', function() {
        const numbers = [1, 2, 3];
        const filtered = filter(numbers, n => n > 1);
        assert.notDeepEqual(filtered, numbers); // The new array should be different from the original
    });

    it('should return empty array if predicate returns false for all elements', function() {
        const numbers = [1, 2, 3];
        assert.deepEqual(filter(numbers, n => false), []);
    });
});