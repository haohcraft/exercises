 // Created by Corn on 12/21/14.
 
 // Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 // For example,
 // "A man, a plan, a canal: Panama" is a palindrome.
 // "race a car" is not a palindrome.
 // Note:
 // Have you consider that the string might be empty? This is a good question to ask during an interview.
 // For the purpose of this problem, we define empty string as valid palindrome.
var isAlphanumeric = function(s) {
    var reg = /^[a-z0-9]/i;
    return reg.test(s);
};
var isPalindrome = function(s) {
    
    var left = 0;
    var right = s.length -1;
    var result = true;
    while(left <= right) {
        if(!isAlphanumeric(s[left])) {
            left++;
            continue;
        }
        if(!isAlphanumeric(s[right])) {
            right--;
            continue;
        }
        if(s[left].toLowerCase() !== s[right].toLowerCase()) {
            result = false;
            break;
        }

        left++;
        right--;
    }
    
    
    return result;
};