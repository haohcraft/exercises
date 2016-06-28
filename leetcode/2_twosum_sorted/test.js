var assert = require('assert');
var twoSum = require('./');

describe("twoSum", function() {
    it("should find out an array for the twoSum case", function() {
        var arr = [2,4,9,23,33,110];
        var result = twoSum(arr, 3);

        assert.equal(result.length, 0);
    });

    it("should work", function() {
        var arr = [2,4,9,23,33,110];
        var result = twoSum(arr, 42);

        assert.equal(result[0], 2);
        assert.equal(result[1], 4);
    });
});