//判断是否存在重复元素
var containsDuplicate = function(nums) {
  return new Set(nums).size != nums.length;
};

containsDuplicate([1, 2, 4, 1]);