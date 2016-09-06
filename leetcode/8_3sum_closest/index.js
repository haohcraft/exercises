/**
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
    For example, given array S = {-1 2 1 -4}, and target = 1.
    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function(nums, target) {
    if(!nums || nums.length < 3) return 0;

	var closest = Number.MAX_SAFE_INTEGER;
	
	// Attention: nums.sort() does NOT work
	// var scores = [1, 10, 2, 21]; 
	// scores.sort(); // [1, 10, 2, 21]
	// Watch out that 10 comes before 2, because '10' comes before '2' in Unicode code point order.
	nums.sort(function(a, b) {
        return a - b;
    });
	
	for(var i = 0; i<nums.length - 1; i++) {
		var left = i +1;
		var right = nums.length -1;
        while(left < right) {
    		var sum = nums[i] + nums[left] + nums[right];
            // console.log(sum);
    		if(sum === target) return target;
    		if(sum < target) {
    			left++;
    		} else {
    			right--;
    		}
    
    		closest = Math.abs(sum - target) < Math.abs(closest - target) ? sum : closest;
            //console.log(closest);
        }

	}

	return closest;
};