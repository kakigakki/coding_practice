/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return toBts(nums);
};

function toBts(nums) {
    if (nums.length === 0) {
        return null;
    }
    const mid = Math.floor(nums.length / 2);
    let midNode = new TreeNode(nums[mid]);
    midNode.left = toBts(nums.slice(0, mid));
    midNode.right = toBts(nums.slice(mid + 1));
    return midNode;
}

console.log([1].slice(0));