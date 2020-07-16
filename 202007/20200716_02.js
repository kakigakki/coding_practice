/* 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

注意:
假设字符串的长度不会超过 1010。 */
var longestPalindrome = function(s) {
  let map = new Map();
  let size1 = 0;
  let size2 = 0;
  for (let i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
  }
  for (const [k, v] of map) {
    if (v % 2 != 0) {
      map.set(k, v - 1);
      size1 -= 1;
    }
    size1 += v;
    size2 += v;
  }
  return size2 == size1 ? size1 : size1 + 1;
};

console.log(longestPalindrome("abccccdddd"));