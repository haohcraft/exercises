/**

Given two arrays, write a function to compute their intersection.

Example:
    Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
    Each element in the result should appear as many times as it shows in both arrays.
    The result can be in any order.
Follow up:
    What if the given array is already sorted? How would you optimize your algorithm?
    What if nums1's size is small compared to nums2's size? Which algorithm is better?
    What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

 */
 
var sortNums = function(numArr) {
    return numArr.sort(function(a, b) {return a - b;});
}
var intersect = function(nums1, nums2) {
    //sort
    var sortedNums1 = sortNums(nums1);
    var sortedNums2 = sortNums(nums2);
    
    var p1 = 0;
    var p2 = 0;
    var result = [];
    while(p1 < sortedNums1.length && p2 < sortedNums2.length) {
        if(sortedNums1[p1] === sortedNums2[p2]) {
            result.push(sortedNums1[p1]);
            p1++;
            p2++;
        } else if(sortedNums1[p1] < sortedNums2[p2]) {
            p1++;
        } else {
            p2++;
        }
    }
    return result;
};
// Faster
// Note: remember to update the dictionary when found one when iterating the other array
var intersect2 = function(nums1, nums2) {
    var result = [];
    var dict = nums1.reduce(function(r, v) {
        if(r[v]) {
            r[v] = r[v] + 1;
        } else {
            r[v] = 1;
        }
        
        return r;
    }, {});
    
    for(var i = 0; i<nums2.length; i++) {
        var peek = nums2[i];
        if(dict[peek]) {
            dict[peek] = dict[peek] - 1;
            result.push(peek);
        }
    }
    
    return result;
};