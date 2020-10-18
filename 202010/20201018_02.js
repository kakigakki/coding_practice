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
var postorder = function(root) {
    let arr = []
    let post = (node) => {
        if (node) {
            for (let i = 0; i < node.children.length; i++) {
                post(node.children[i])
            }
            arr.push(node.val)
        }
    }
    post(root)
    return arr
};