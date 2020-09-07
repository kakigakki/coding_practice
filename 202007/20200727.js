/* 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。 */

//使用数组+map,用map记录每个数出现的次数
var topKFrequent = function(nums, k) {
  let map = {};
  let res = [];
  nums.forEach((x) => (map[x] ? map[x]++ : (map[x] = 1)));
  nums = Object.entries(map).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    res.push(+nums[i][0]);
  }
  return res;
};

console.log(topKFrequent([1], 1));