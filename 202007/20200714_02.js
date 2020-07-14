/* 判断两个字符串是否是同一种构造 */

var isIsomorphic = function(s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) != t.indexOf(t[i])) return false;
  }
  return true;
};

console.log(isIsomorphic("acgdeca", "acgdeca"));

/* 
此题与上面那一题很像,所以就放一起了


给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
这里的 遵循 指完全匹配，
例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

 */
var wordPattern = function(pattern, str) {
  let strArr = str.split(" ")
  if (strArr.length != pattern.length) return false
  for (i = 0; i < pattern.length; i++) {
    if (pattern.indexOf(pattern[i]) != strArr.indexOf(strArr[i])) return false
  }
  return true
};