/* 

给定一个包含 n 个整数的数组 nums 和一个目标值 target，
判断 nums 中是否存在四个元素 a，b，c 和 d ，
使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：
答案中不可以包含重复的四元组。
*/

//题解:三数之和的升级版,再嵌一个循环
var fourSum = function(nums, target) {
  //排序
  nums = nums.sort((a, b) => a - b);
  let res = [];
  //循环第一个数
  for (let i = 0; i < nums.length; i++) {
    if (target > 0 && nums[i] > target) return res;
    if (nums[i - 1] == nums[i]) continue;
    //循环第二个数
    for (let secondPos = i + 1; secondPos <= nums.length - 3; secondPos++) {
      if (nums[secondPos] == nums[secondPos - 1] && secondPos - 1 != i)
        continue;
      let startPos = secondPos + 1;
      let endPos = nums.length - 1;

      //循环第三个数和第四个数
      while (startPos < endPos) {
        let first = nums[i];
        let second = nums[secondPos];
        let start = nums[startPos];
        let end = nums[endPos];
        let total = first + second + start + end;
        if (total > target) {
          endPos--;
        } else if (total < target) {
          startPos++;
        } else {
          res.push([first, second, start, end]);
          //去重
          while (nums[endPos] == nums[endPos - 1]) endPos--;
          while (nums[startPos] == nums[startPos + 1]) startPos++;
          endPos--;
          startPos++;
        }
      }
    }
  }
  return res;
};

console.log(fourSum([-1, 2, 2, -5, 0, -1, 4], 3));