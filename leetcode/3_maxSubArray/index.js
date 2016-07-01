var findMaxSumCrossMid = function(arr, left, right) {
    
    var maxL = -Number.MAX_SAFE_INTEGER;
    var maxR = -Number.MAX_SAFE_INTEGER;
    var mid = Math.floor((left + right)/2);
    var sumL = 0;
    for(var i = mid; i >= left; i--) {
        sumL = sumL + arr[i];
        if(sumL > maxL) {
            maxL = sumL;
        }
    }
    
    var sumR = 0;
    for(var j = mid +1; j <= right;j++) {
        sumR = sumR + arr[j];
        if(sumR > maxR) {
            maxR = sumR;
        }
    }
    
    return maxL + maxR;
    
}
var findMaxSum = function(arr, left, right) {
    // console.log(left);
    // console.log(right); 
    if(left === right) return arr[left];
    if(left > right) return -Number.MAX_SAFE_INTEGER;
    var mid = Math.floor((right + left) / 2);

    var leftMax = findMaxSum(arr, left, mid);
    var rightMax = findMaxSum(arr, mid+1, right);
    var midMax = findMaxSumCrossMid(arr, left, right);
    var max = Math.max(leftMax, rightMax, midMax)
    // console.log(max);
    return max;
}
var maxSubArray = function(nums) {
    
    return findMaxSum(nums, 0, nums.length - 1);
};

module.exports = maxSubArray;