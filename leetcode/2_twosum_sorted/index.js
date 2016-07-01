// Question:
// Similar to Question [1. Two Sum], except that the input array is already sorted in ascending order.
// Solution 1: binary search to look up and there are n items, so nlogn



var binarySearch = function(arr, target) {
    var len = arr.length;
    var mid = Math.floor(len/2);
    var midNum = arr[mid];
    if(target < arr[0] || target > arr[len -1 ]) return -1;
    if(midNum === target) {
        return mid;
    } else if(midNum < target) {
        return binarySearch(arr.slice(mid), target);
    } else {
        return binarySearch(arr.slice(0, mid), target);
    } 
}

var binarySearch2 = function(arr, start, key) {
    var left = start;
    var right = arr.length -1;

    while(left < right) {
        var mid = Math.floor((left + right) / 2);
        if(arr[mid] < key) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return (left === right && arr[left] === key) ? left : -1;
}

var twoSumSorted = function(nums, target) {
    var len = nums.length;
    for(var i = 0; i < len; i++) {
        var current = nums[i];
        var rest = target - current;
        console.log(rest)
        var index = binarySearch2(nums, i+1, rest);
        if(~index) {
            return [i, index];
        }
    }

    return []
};

module.exports = twoSumSorted;
