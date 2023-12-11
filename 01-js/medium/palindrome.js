/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let s = '';
  for (let c of str) {
    if (c >= 'a' && c <= 'z') {
      s += c;
    }
  }
  let n = s.length;
  for (let i=0;i<n;i++) {
    if (s[i] !== s[n-i-1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
