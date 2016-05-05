var binarySearch = function(arr, target) {
    var min = 0;
    var max = arr.length - 1;
    var mid;

    while(min <= max) {
        mid = Math.floor( (max + min)/2 );
        var _mid = arr[mid];
        if( _mid === target) {
            return mid;
        } else {
            if (_mid < target) {
                min = mid + 1;
            } else {
                max = mid -1;
            }
        }
    }

    return -1;
    
};

module.exports = binarySearch;