/* 给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return [];
    let res = [];
    path(node, str, res);
    return res;
};

var path = function(node, str, res) {
    if (!node) return;
    if (!node.left && !node.right) {
        str += node.val;
        res.push(str);
    } else {
        str += node.val + "->";
    }
    path(node.left, str, res);
    path(node.right, str, res);
};