/* 给定一个整数数组和一个整数 k，
判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
*/

//笨方法
var containsNearbyDuplicate = function(nums, k) {
  let obj = nums.reduce((prev, cur, index) => {
    prev[cur] ? prev[cur].push(index) : (prev[cur] = [index]);
    return prev;
  }, {});

  for (const [key, val] of Object.entries(obj)) {
    if (val.length != 1) {
      return (
        Math.min(
          ...val
          .map((item, index, arr) => arr[index + 1] - arr[index])
          .slice(0, -1)
        ) <= k
      );
    }
  }
  return false;
};

//比笨方法聪明点的方法
var containsNearbyDuplicate2 = function(nums, k) {
  let m = {};
  for (let i = 0; i < nums.length; i++) {
    if (!isNaN(m[nums[i]]) && i - m[nums[i]] <= k) {
      return true;
    } else {
      m[nums[i]] = i;
    }
  }

  return false;
};

console.log(containsNearbyDuplicate2([1, 2, 3, 1], 3));