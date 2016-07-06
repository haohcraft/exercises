/**
Given an input string, reverse the string word by word.
For example,
Given s = "the sky is blue",
return "blue is sky the".
 * @param {string} str
 * @returns {string}

    Q: 1. leading/trailing spaces? 2. tab, multiple spaces 3. 

 */

// if there is no leading or trailing space and is separated by single space
 var reverseWords = function(str) {
    if(!str || !str.length) return str;
    var trimedStr = str.trim();
    var i = 0, j = 0;
    reverse(trimedStr, 0, str.length - 1);

    for(var i = 0; i <= trimedStr.length; i++) {
        var current = trimedStr[i];
        if(current === "" || i === trimedStr.length) {
            reverse(trimedStr, j, i);
            j = i + 1;
        }
    }
 }
function reverse(str, start, end) {
    while(start < end - 1) {
        var hold = str[start];
        str[start] = str[end - 1];
        str[end - 1] = hold;
        start++;
        end--;
    }
}


var reverseWords2 = function(str) {
    if(!str || str === "") return str;
    var result = "";
    var arr = str.split(" ");
    for(var i = arr.length - 1; i>=0; i--) {
        if(arr[i] === "") continue;
        result = result + " " + arr[i];
    }

    return result.trim();
}
