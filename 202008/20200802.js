/* 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。 */

//使用前缀和数组
var subarraySum = function(nums, k) {
  let preSum = [0];
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    preSum.push(preSum[i] + nums[i]);
  }
  for (let i = 1; i < preSum.length; i++) {
    for (let j = i; j < preSum.length; j++) {
      if (preSum[j] - preSum[i - 1] === k) {
        res++;
      }
    }
  }
  return res;
};

//使用前缀和map,达到事件复杂度为0(n)
var subarraySum2 = function(nums, k) {
  let map = {};
  let preSum = [0];
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    preSum.push(preSum[i] + nums[i]);
  }
  preSum.shift();

  for (let i = 0; i < preSum.length; i++) {
    const ele = preSum[i];
    console.log(ele);
    if (ele == k) res++;
    console.log(res);
    if (!map[ele]) {
      map[ele] = 1;
    }
    if (map[ele - k]) {
      res++;
    }
  }
  return res;
};

console.log(subarraySum2([1], 0));