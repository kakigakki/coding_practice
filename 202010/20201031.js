/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let res = Infinity
    let prev = null
    let dps = (node) => {
        if (!node) return
        dps(node.left)
            //处理最小的值
        if (prev) {
            if (node.val - prev < res) {
                res = node.val - prev
            }
        }
        prev = node.val
        dps(node.right)
    }
    dps(root)
    return res
}