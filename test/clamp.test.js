import assert from 'assert';
import clamp from '../src/clamp.js';

describe('clamp', function(){
    describe('clamp', function() {
        it('should clamp number within lower and upper bounds', function() {
            assert.strictEqual(clamp(-10, -5, 5), -5);
            assert.strictEqual(clamp(10, -5, 5), 5);
            assert.strictEqual(clamp(0, -5, 5), 0);
        });

        it('should return the lower bound when number is less than lower', function() {
            assert.strictEqual(clamp(-6, -5, 5), -5);
        });

        it('should return the upper bound when number is greater than upper', function() {
            assert.strictEqual(clamp(6, -5, 5), 5);
        });

        it('should handle lower and upper being NaN', function() {
            assert.strictEqual(clamp(10, NaN, NaN), 0);
        });

        it('should convert inputs to numbers', function() {
            assert.strictEqual(clamp('10', '-5', '5'), 5);
        });

        it('should return NaN when number is NaN', function() {
            assert.strictEqual(clamp(NaN, -5, 5), NaN);
        });
    });
});