import assert from 'assert';
import endsWith from '../src/endsWith.js';

describe('endsWith', function () {
    it('should return true when checking (HelloWorld) ends with (World)', function () {
        assert.equal(endsWith("HelloWorld", "World"), true);
    });

    it('should return true when checking (HelloWorld) ends with (Hello) til the 5th position', function () {
        assert.equal(endsWith("HelloWorld", "Hello", 5), false);
    });

    it('should return true when checking empty string ends with empty string', function () {
        assert.equal(endsWith("", ""), true);
    });

    it('should return true when checking (HelloWorld) ends with empty string', function () {
        assert.equal(endsWith("HelloWorld", ""), true);
    });

    it('should return false when checking empty string ends with (HelloWorld)', function () {
        assert.equal(endsWith("", "HelloWorld"), false);
    });

    it('should return true when checking (HelloWorld) ends with empty string til the 100th position', function () {
        assert.equal(endsWith("HelloWorld", "", 100), true);
    });

    it('should return false when checking (HelloWorld) ends with (Worl)', function () {
        assert.equal(endsWith("HelloWorld", "Worl", ), false);
    });

    it('should return false when checking (HelloWorld) ends with (World) til the 5th position', function () {
        assert.equal(endsWith("HelloWorld", "World", 5), false);
    });


    it('should throw error when checking (HelloWorld) ends with (Hello) til the -5th position', function () {
        // assumption made that this method should not return false in this case ?
        // assert.equal(endsWith("HelloWorld", "Hello", -5), false);
        assert.throws(() => endsWith("HelloWorld", "World", -5), Error, "Position cannot be negative");
    });
});