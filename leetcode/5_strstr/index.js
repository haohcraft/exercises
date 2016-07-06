
// Implement strStr().

// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
var strStr = function(haystack, needle) {
    
    if(needle.length > haystack.length) return -1;
    if(needle[0] !== haystack[0] && needle.length === haystack.length) return -1;
    
    for(var i =0; i<=haystack.length; i++) {
        for(var j =0; j<=needle.length; j++) {
            if(j === needle.length) return i;
            if(i+j === haystack.length) return -1;
            if(needle[j] !== haystack[i + j]) break;
        }
    }
    
    return result;
};