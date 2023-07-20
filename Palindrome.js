/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  function isPalindrome(x) {
    if (x < 0) return false;
  }

  const originalString = String(x);
  const reversedString = originalString.split("").reverse().join("");

  return originalString === reversedString;
};
