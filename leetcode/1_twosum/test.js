var assert = require('assert');
var twoSum = require('./');

describe("twoSum", function() {
    it("should find out an array for the twoSum case", function() {
        var arr = [2,4,68,9,3,0];
        var result = twoSum(arr, 3);

        assert.equal(result[0], 4);
        assert.equal(result[1], 5);
    });

    it("should ignore 3", function() {
        var arr = [20,3,0,2,4,68,9];
        var result = twoSum(arr, 6);

        assert.equal(result[0], 3);
        assert.equal(result[1], 4);
    });
});