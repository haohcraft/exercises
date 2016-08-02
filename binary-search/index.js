var binarySearch = function(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    while(l+1 < r) {
        var mid = Math.floor((l +r) / 2);
        if(arr[mid] > target) { 
            r = mid;
        } else if(arr[mid] < target) {
            l = mid;
        } else {
            return mid;
        }
    }
    if(arr[l] == target) return l;
    if(arr[r] == target) return r;
    return -1;
};
module.exports = binarySearch;