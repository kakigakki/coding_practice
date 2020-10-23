/* 给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

案例 1:
输入: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

输出: True

案例 2:
输入: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

输出: False */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
//两数之和hash版结合二叉搜索树的中序遍历
var findTarget = function(root, k) {
    let ht = {}
    let inOrder = (node) => {
        if (node) {
            let q = inOrder(node.left)
                //判断哈希表中是否存在于当前节点值和为k的值
                //如果有，直接返回true
            if (ht[k - node.val]) {
                return true
            }
            //如果没有，则将当前节点值存入哈希表，以便接下来的节点进行判断
            ht[node.val] = true
            let p = inOrder(node.right)
            return q || p
        }
        return false
    }
    return inOrder(root)
};