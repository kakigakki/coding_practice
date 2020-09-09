/* 
Given
[5, 32, 5, 1, 31, 70, 30, 8]
and you want to know all the values that fall within a difference of 2 of each other:

Should Return
[5,5,30,31,32]
If an empty array is given, then an empty array should be returned regardless of the value passed in.

*/

class GroupByDifference {
  constructor(nums) {
    this.array = nums.sort((a, b) => a - b);
  }
  find(num) {
    return this.array.filter((x, idx, arr) => {
      return (
        arr[idx] - arr[idx - 1] <= num || arr[idx + 1] - arr[idx] <= num
      );
    });
  }
}

let arr = new GroupByDifference([5, 32, 5, 1, 31, 70, 30, 8]).find(100);
console.log(arr);