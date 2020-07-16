/* 
给定两个数组，编写一个函数来计算它们的交集。
输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。
*/

var intersect = function(nums1, nums2) {
  let obj = {};
  let res = [];
  for (const x of nums1) obj[x] ? obj[x]++ : (obj[x] = 1);
  for (const y of nums2) {
    if (obj[y]) {
      res.push(y);
      obj[y]--;
    }
  }
  return res;
};

console.log(intersect([1, 1, 6, 4, 4, 4, 1], [1, 2, 3, 4, 3, 4]));