import assert from 'assert';
import eq from '../src/eq.js';

describe('eq', function(){
    it('should return true when checking "hi" equals "hi"', function () {
        assert.equal(eq("hi", "hi"), true);
    });

    it('should return false when checking "hi" equals "bye"', function () {
        assert.equal(eq("hi", "bye"), false);
    });
    
    it('should return true when checking \'c\' equals \'c\'', function () {
        assert.equal(eq('c', 'c'), true);
    });

    it('should return false when checking \'c\' equals \'d\'', function () {
        assert.equal(eq('c', 'd'), false);
    });

    it('should return true when checking 786 equals 786', function () {
        assert.equal(eq(786, 786), true);
    });

    it('should return false when checking 786 equals 787', function () {
        assert.equal(eq(786, 787), false);
    });

    it('should return true when checking NaN equals NaN', function () {
        assert.equal(eq(NaN, NaN), true);
    });

    it('should return false when checking NaN equals NaN', function () {
        assert.equal(eq(NaN, null), false);
    });
    
    it('should return true when checking null equals null', function () {
        assert.equal(eq(null, null), true);
    });

    it('should return true when checking null equals undefined', function () {
        assert.equal(eq(null, undefined), true);
    });
    
    it('should return true when checking object {a: 1} equals object {a: 1}', function () {
        assert.equal(eq({ 'a': 1 }, { 'a': 1 }), true);
    });

    it('should return false when checking object {a: 1} equals object {a: 2}', function () {
        assert.equal(eq({ 'a': 1 }, { 'a': 2 }), false);
    });

    it('should return false when checking object {a: 1} equals object {a: 2}', function () {
        assert.equal(eq({ 'a': 1 }, { 'a': 2 }), false);
    });

    it('should return false when checking "a" equals Object("a")', function () {
        assert.equal(eq('a', Object('a')), false);
    });
});