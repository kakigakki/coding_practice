/* 给定一个 N 叉树，返回其节点值的前序遍历。

例如，给定一个 3叉树 : */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let arr = []
    let pre = (node) => {
        if (node) {
            arr.push(node.val)
            for (let i = 0; i < node.children.length; i++) {
                pre(node.children[i])
            }
        }
    }
    pre(root)
    return arr
};