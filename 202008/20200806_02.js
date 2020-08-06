/* 
给你一个字符串 S、一个字符串 T 。
请你设计一种算法，可以在 O(n) 的时间复杂度内，从字符串 S 里面找出：包含 T 所有字符的最小子串。
*/

//滑动窗口+哈希表+双指针框架
var minWindow = function(s, t) {
  let left = 0,
    right = 0,
    match = 0;
  let window = {};
  let target = {};
  let len = Number.MAX_SAFE_INTEGER;
  let start;
  for (let i = 0; i < t.length; i++) {
    target[t[i]] ? target[t[i]]++ : (target[t[i]] = 1);
  }
  const targetLen = Object.keys(target).length;
  while (right < s.length) {
    const eleR = s[right];
    if (target[eleR]) {
      window[eleR] ? window[eleR]++ : (window[eleR] = 1);
      if (window[eleR] === target[eleR]) {
        match++;
      }
    }
    right++;
    while (match === targetLen) {
      const eleL = s[left];
      const lenNow = right - left;
      if (lenNow < len) {
        start = left;
        len = lenNow;
      }
      if (target[eleL]) {
        window[eleL]--;
        if (window[eleL] < target[eleL]) {
          match--;
        }
      }
      left++;
    }
  }
  return len == Number.MAX_SAFE_INTEGER ? "" : s.substr(start, len);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));