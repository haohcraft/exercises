// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
var threeSum = function(nums) {
    var result = [];
    var sum = 0;
    if(nums.length < 3) return result;
    nums.sort(function(a, b) {
        return a-b;
    });
    for(var i = 0; i<nums.length-2;i++){
        if(i !== 0 && nums[i] === nums[i-1]) {
            continue;
        }

        var left = i + 1;
        var right = nums.length -1;
        
        while(left < right) {
            
            sum = nums[left] + nums[i] + nums[right];
            if(sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while(nums[left - 1] === nums[left] && left < right) left++; // Why this is nums[left - 1] === nums[left] instead of nums[left + 1] === nums[left] ??
                while(nums[right + 1] === nums[right] && left < right) right--;
            } else if(sum < 0) {
                left++;
            } else {
                right--;
            }
            
        }
        
        
        
    }

    return result;
};