/* 
给定一个整数数组和一个整数 k，
你需要找到该数组中和为 k 的连续的子数组的个数。
*/
/* 
输入:nums = [1,1,2,3,4,1,1,1], k = 10
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。

*/


var subarraySum = function(nums, k) {
    let window = []
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        let index = window.length ? window.reduce((prev, cur) => prev + cur) : 0
        for (let j = i; j < nums.length; j++) {
            window.push(nums[j])
            index += nums[j]
            console.log(index, i);
            if (index == k) {
                res++
                index = index - window.shift()
                break
            } else if (index > k) {
                index = index - window.shift()
                break
            }
        }
    }
    console.log(window);
    return res
};

console.log(subarraySum([1, 1, 1, 1], 2));