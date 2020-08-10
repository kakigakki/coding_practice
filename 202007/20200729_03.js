/* 
Write a function that will take in any array and reverse it.

Sounds simple doesn't it?

NOTES:

Array should be reversed in place! (no need to return it)
Usual builtins have been deactivated. Don't count on them.
You'll have to do it fast enough, so think about performances

*/

//递归反转
function reverse(arr) {
  return arr.slice(0, 1);
}

function split(arr) {
  const mid = (arr.length / 2) | 0;
  let arr1 = arr.slice(0, mid);
  let arr2 = arr.slice(mid);
  if (arr1.length >= 2) {
    arr1 = split(arr1);
  }
  if (arr2.length >= 2) {
    arr2 = split(arr2);
  }
  return arr2.concat(arr1);
}

//迭代反转
function reverse2(arr) {
  let left, right;
  for (let left = 0; left < arr.length / 2; left++) {
    right = arr.length - 1 - left;
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
  return arr;
}
console.log(reverse2([1, 2, 3, 4, 5]));