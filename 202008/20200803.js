/* 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

说明：

字母异位词指字母相同，但排列不同的字符串。
不考虑答案输出的顺序。

 */

//偏暴力的解法,js会超时
var findAnagrams = function(s, p) {
    let res = [];
    let map = {}
    let pSorted = p.split("").sort().join("")
    for (let i = 0; i < s.length - (p.length - 1); i++) {
        let windowStr = "";
        windowStr = s.substr(i, p.length)
        if (windowStr.split("").sort().join("") == pSorted) {
            res.push(i)
        }

    }
    return res;
};
console.log(findAnagrams("cbaebabacd", "abc"));

var findAnagrams = function(s, p) {
    let res = [];
    for (let i = 0; i < s.length - (p.length - 1); i++) {
        let code;
        let pIndex = 0;
        for (let j = i; j < i + p.length; j++) {
            code ^= s[j].codePointAt() ^ p[pIndex++].codePointAt();
        }
        if (code == 0) {
            res.push(i);
        }
    }
    return res;
};

//滑动窗口,双指针,哈希表解法
var findAnagrams = function(s, p) {
  let right = 0,
    left = 0,
    matchKey = 0;
  let window = {};
  let target = {};
  let res = [];
  //将需要的目标子串做成哈希表
  for (const str of p) {
    target[str] ? target[str]++ : (target[str] = 1);
  }
  const targetLen = Object.keys(target).length;
  console.log(target);
  //当右指针到达末尾时,停止滑动
  while (right < s.length) {
    //右指针上的元素
    const eleR = s[right];
    if (target[eleR]) {
      window[eleR] ? window[eleR]++ : (window[eleR] = 1);
      if (window[eleR] === target[eleR]) {
        matchKey++;
      }
    }
    right++;

    while (matchKey === targetLen) {
      console.log(right - left);
      //如果窗口长度等于p的长度,而且matchKey也等于targetLength的话,就证明此时窗口的值为字母异位词
      if (right - left == p.length) res.push(left);
      //左指针上的元素
      const eleL = s[left];
      //当要缩小的左指针在target上的话,将窗口上目标元素的值-1
      if (target[eleL]) {
        window[eleL]--;
        //当窗口上的目标元素小于target上的目标元素时,此窗口需要扩容,需要跳出当前循环去增加right
        if (window[eleL] < target[eleL]) {
          matchKey--;
        }
      }
      left++;
    }
  }
  return res;
};

//拓展,滑动窗口模板
// 模式串 B、目标串 A
let B = "xxx";
let A = "yyy";
// 双指针
let left = 0,
  right = 0;
// 滑动窗口
let windows = {};
// 限定规则
let needs = {};
// 限定规则操作
let valid;
// 符合规则计数
let match = 0;
// 变化窗口
while (right < A.length) {
  // 增大窗口
  if (valid) {
    windows.add(B[right]);
  }
  // 前进窗口
  right++;
  // 限定规则计数满足题意
  while (match === needs.length) {
    if (valid) {
      // 缩小窗口
      window.remove(B[left]);
      // 归位规则计数
      match--;
      // 继续下一轮、增大前进窗口
      left++;
    }
  }
}

console.log(findAnagrams("cbaebabacd", "abc"));