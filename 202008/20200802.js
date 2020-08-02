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

console.log(subarraySum([1, 2, 3, 3, 5], 6));