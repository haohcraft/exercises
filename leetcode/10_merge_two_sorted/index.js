/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * from https://leetcode.com/problems/merge-sorted-array/
 */
var merge = function(nums1, m, nums2, n) {
    var i = m-1;
    var j = n-1;
    var k = m + n -1;
    while(i>=0 && j>=0) {
        
        if(nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    while(i>=0) {
        nums1[k] = nums1[i];
        i--;
        k--;
    }
    
    while(j>=0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

var merge2 = function(nums1, m, nums2, n) {
    var i = 0;
    while(i < n) {
        nums1[m+i] = nums2[i];
    }
    nums1 = nums1.sort(function(a,b) {return a-b;});
};