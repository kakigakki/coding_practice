/* 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
示例 1：

输入：
    3
   / \
  9  20
    /  \
   15   7
输出：[3, 14.5, 11]
解释：
第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let queue = [root]
    let res = []
    while (queue.length) {
        let size = queue.length
        let sum = 0
        let num = 0
        for (let i = 0; i < size; i++) {
            let curNode = queue.shift()
            sum += curNode.val
            num++
            if (curNode.left) queue.push(curNode.left)
            if (curNode.right) queue.push(curNode.right)
        }
        res.push(sum / num)
    }
    return res
};