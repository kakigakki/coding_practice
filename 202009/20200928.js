/* 
翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null
    if (!root.left && !root.right) return root
    return invert(root)
};

var invert = function(node) {
    if (!node.left && !node.right) return
    let temp = node.left
    node.left = node.right
    node.right = temp
    if (node.left) invert(node.left)
    if (node.right) invert(node.right)
    return node
}