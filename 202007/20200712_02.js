//求只出现一次的数字
//利用异或运算符:相等为0,不等为1
var singleNumber = function(nums) {
  return nums.reduce((prev, cur) => prev ^ cur);
};

console.log(singleNumber([1, 1, 2, 2, 3]));