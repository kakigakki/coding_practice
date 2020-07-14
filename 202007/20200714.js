/* 
编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。

*/
var isHappy = function(n) {
  let set = new Set();
  let sum = n;
  let num;
  while (sum != 1) {
    num = sum;
    sum = 0;
    while (num >= 10) {
      sum = (num % 10) ** 2 + sum;
      num = Math.floor(num / 10);
    }
    sum += num ** 2;
    if (set.has(sum)) return false;
    if (sum === 1) return true;
    set.add(sum);
  }
};

console.log(isHappy(287));