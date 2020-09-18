/* 
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。

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
 * @return {boolean}
 */

//此题类似找树的深度
var isBalanced = function(root) {
    if (!root) return true;
    return balanced(root);
};

var balanced = function(node) {
    if (!node) return 1;
    //找深度
    let depth = balanced(node.left);
    let depth2 = balanced(node.right);
    //如果有返回过一次false，然后就一直false
    if (depth == false || depth2 == false) return false;
    if (Math.abs(depth - depth2) > 1) {
        return false;
    }

    return Math.max(depth, depth2) + 1;
};