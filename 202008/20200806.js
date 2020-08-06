/* 
给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的子串。

*/

//滑动窗口+哈希表+双指针框架
var checkInclusion = function(s1, s2) {
  let left = 0,
    right = 0,
    match = 0;
  let window = {};
  let target = {};
  for (let i = 0; i < s1.length; i++) {
    target[s1[i]] ? target[s1[i]]++ : (target[s1[i]] = 1);
  }
  const targetLen = Object.keys(target).length;
  while (right < s2.length) {
    const eleR = s2[right];
    if (target[eleR]) {
      window[eleR] ? window[eleR]++ : (window[eleR] = 1);
      if (window[eleR] === target[eleR]) match++;
    }
    right++;
    while (match === targetLen) {
      if (right - left == s1.length) {
        return true;
      }
      const eleL = s2[left];
      if (target[eleL]) {
        window[eleL]--;
        if (window[eleL] < target[eleL]) {
          match--;
        }
      }
      left++;
    }
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));