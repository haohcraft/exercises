/**
 * Given two arrays, write a function to compute their intersection.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    var map = nums1.reduce(function(r, v) {
        r[v] = true;
        return r;
    }, {});
    
    return nums2.reduce(function(r, v) {
        if(map[v] && !~r.indexOf(v)) r.push(v);
        
        return r;
    }, []);
    
};