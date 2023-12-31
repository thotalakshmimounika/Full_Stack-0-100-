/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const xstr=str.toLowerCase().replace(/[^a-z]/g, '');
  const ystr=xstr.split('').reverse().join('')
  return xstr===ystr
}

module.exports = isPalindrome;
