var assert = require('assert');
var maxSubArray = require('./');

describe("Find Max Subarray", function() {
    it("should find out max sum 6", function() {
        var arr = [-2,1,-3,4,-1,2,1,-5,4];
        var result = maxSubArray(arr);

        assert.equal(result, 6);
    });
    it("should find out max sum -2", function() {
        var arr = [-2];
        var result = maxSubArray(arr);

        assert.equal(result, -2);
    });
    it("should find out max sum -2", function() {
        var arr = [1,2];
        var result = maxSubArray(arr);

        assert.equal(result, 3);
    });

    
});