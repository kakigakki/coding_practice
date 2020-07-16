var lengthOfLongestSubstring = function(s) {
  //利用一个str保存当前不重复的字符串
  let str = ""
    //保存当前的最长子字符串
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let idx = str.indexOf(s[i])
    if (idx != -1) {
      //裁剪出重复字符串之间的不重复字符串
      str = str.slice(idx + 1, i)

    }
    str += s[i]
    max = Math.max(str.length, max)
  }
  return max
};

console.log(lengthOfLongestSubstring("abcabcbb"));