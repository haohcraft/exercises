// Map solution 
// Edge case: the looked-up item is equal to the rest
var twoSum = function(nums, target) {
    var result = [];
    var map = {};
    for(var i = 0; i < nums.length; i++) {
        var current = nums[i];
        var rest = target - current;
        if(map[rest] !== undefined && map[rest] !== i) {
            result = [].concat([map[rest], i]);
            break;
        } else {
            map[current] = i;
        }
    }
    return result;
}

module.exports = twoSum;