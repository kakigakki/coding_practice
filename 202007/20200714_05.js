//判断两个字符串是否是异位单词
var isAnagram = function(s, t) {
  if (s.length != t.length) return false;
  let obj = {};
  let obj2 = {};
  for (i = 0; i < s.length; i++) {
    let sCode = s.codePointAt(i);
    let tCode = t.codePointAt(i);
    obj[sCode] ? obj[sCode]++ : (obj[sCode] = 1);
    obj2[tCode] ? obj2[tCode]++ : (obj2[tCode] = 1);
  }
  for (const key in obj) {
    if (obj[key] != obj2[key]) return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));