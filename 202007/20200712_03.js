//统计所有小于非负整数 n 的质数的数量。
var countPrimes = function(n) {
  let nums = new Array(n);
  //当n为2或者3的时候
  let count = 0;
  for (let i = 2; i < nums.length; i++) {
    //值为空,值不为true的话,进第二个循环
    if (!nums[i - 1]) {
      count++;
      //将i的倍数的值设置为true(即,排除i的倍数的所有值)
      for (let j = i * i; j < nums.length; j += i) {
        nums[j - 1] = true;
      }
    }
  }
  return count;
};