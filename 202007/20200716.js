/* 给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。 */

//普通解法
var findTheDifference = function(s, t) {
  let a = s.split("").sort();
  let b = t.split("").sort();
  for (i = 0; i < s.length; i++) {
    if (a[i] != b[i]) return b[i];
  }
  return b.pop();
};

//使用异或解法,跟[20200712_02]很像
var findTheDifference2 = function(s, t) {
  let r = 0;
  for (let i = 0; i < s.length; i++) r ^= t.codePointAt(i) ^ s.codePointAt(i);
  return String.fromCodePoint(r ^ t.codePointAt(s.length));
};

console.log(findTheDifference2("add", "addr"));