/* 给你一个包含 n 个整数的数组 nums，
判断 nums 中是否存在三个元素 a，b，c ，
使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

*/

//先对`nums`进行排序,然后循环遍历数组
var threeSum = function(nums) {
  let res = [];
  //排序数组
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    //当前值大于0时直接结束函数
    if (nums[i] > 0) return res;
    //重复值的话，直接进入下个循环
    if (nums[i] == nums[i - 1]) continue;
    //第二个数的值
    let Lpos = i + 1;
    //第三个数的值
    let Rpos = nums.length - 1;
    while (Lpos < Rpos) {
      let sum = nums[i] + nums[Lpos] + nums[Rpos];
      if (sum > 0) {
        Rpos--;
      } else if (sum < 0) {
        Lpos++;
      } else {
        res.push([nums[i], nums[Lpos], nums[Rpos]]);
        //去重
        while (nums[Lpos] == nums[Lpos + 1]) {
          Lpos++;
        }
        //去重
        while (nums[Rpos] == nums[Rpos - 1]) {
          Rpos--;
        }
        Lpos++;
        Rpos--;
      }
    }
  }
  return res;
};

console.log(threeSum([-2, 0, 0, 2, 2]));