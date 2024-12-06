import assert from 'assert';
import ceil from '../src/ceil.js';

describe('ceil', function(){
    it('should return the smallest integer greater than or equal to a positive number', function() {
        assert.strictEqual(ceil(4.2), 5);
        assert.strictEqual(ceil(0.1), 1);
        assert.strictEqual(ceil(5), 5);
    });

    it('should return the smallest integer greater than or equal to a negative number', function() {
        assert.strictEqual(ceil(-4.2), -4);
        assert.strictEqual(ceil(-4.8), -4);
        assert.strictEqual(ceil(-5), -5);
    });

    it('should handle zero', function() {
        assert.strictEqual(ceil(0), 0);
    });

    it('should handle numeric strings', function() {
        assert.strictEqual(ceil('4.2'), 5);
        assert.strictEqual(ceil('-4.2'), -4);
    });

    it('should return NaN for invalid inputs', function() {
        assert.strictEqual(isNaN(ceil('abc')), true);
        assert.strictEqual(isNaN(ceil(undefined)), true);
        assert.strictEqual(isNaN(ceil(null)), true);
    });

    it('should handle edge cases', function() {
        assert.strictEqual(ceil(Number.MAX_VALUE), Number.MAX_VALUE);
        assert.strictEqual(ceil(Number.MIN_VALUE), 1);
    });

    it('should round up numbers with positive precision', function() {
        assert.strictEqual(ceil(4.006, 2), 4.01);
        assert.strictEqual(ceil(0.046, 2), 0.05);
        assert.strictEqual(ceil(1234.5678, 3), 1234.568);
    });

    it('should round up numbers with negative precision', function() {
        assert.strictEqual(ceil(6040, -2), 6100);
        assert.strictEqual(ceil(2500, -3), 3000);
        assert.strictEqual(ceil(12345, -4), 20000);
    });

    it('should handle negative numbers with precision', function() {
        assert.strictEqual(ceil(-4.006, 2), -4);
        assert.strictEqual(ceil(-0.046, 2), -0.04);
        assert.strictEqual(ceil(-1234.5678, 3), -1234.567);
    });

    it('should treat null or undefined precision as zero', function() {
        assert.strictEqual(ceil(4.006, undefined), 5);
        assert.strictEqual(ceil(4.006, null), 5);
    });

    it('should return NaN when precision is invalid', function() {
        assert.strictEqual(isNaN(ceil(4.006, 'a')), true);
        assert.strictEqual(isNaN(ceil(4.006, {})), true);
        assert.strictEqual(isNaN(ceil(4.006, [])), true);
    });
});