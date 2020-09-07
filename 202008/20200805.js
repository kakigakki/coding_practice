/* 
给定一个含有 n 个正整数的数组和一个正整数 s ，
找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

*/
//滑动窗口,双指针解法
var minSubArrayLen = function(s, nums) {
  let left = 0,
    right = 0;
  let window = [];
  let sum = 0;
  let curLen = 99;
  while (right < nums.length) {
    const numR = nums[right];
    if (sum < s) {
      sum += numR;
      window.push(numR);
    }
    right++;
    while (sum >= s) {
      curLen = Math.min(window.length, curLen);
      window.shift();
      sum -= nums[left];
      left++;
    }
  }
  return curLen == 99 ? 0 : curLen;
};

var minSubArrayLen = function(s, nums) {
  let preNums = [0];
  let num = 0;
  let len = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    preNums.push(preNums[i] + nums[i]);
  }
  for (let i = 1; i < preNums.length; i++) {
    for (let j = i; j < preNums.length; j++) {
      const sum = preNums[j] - preNums[i - 1];
      if (sum >= s) {
        len = Math.min(j - i + 1, len);
        break;
      }
    }
  }
  return len == Number.MAX_SAFE_INTEGER ? 0 : len;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));