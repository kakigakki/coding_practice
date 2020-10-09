/* 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

 

示例：

输入：

   1
    \
     3
    /
   2

输出：
1

解释：
最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。*/

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
//使用中序遍历排序后，就比较方便了
var getMinimumDifference = function(root) {
    let params = {
        prev,
        min: Number.MAX_SAFE_INTEGER,
    };
    let inOrder = (node, params) => {
        if (node) {
            inOrder(node.left, params);
            if (params.prev != null) {
                params.prev = node.val;
            } else {
                const curDiff = Math.abs(node.val - params.prev);
                if (curDiff < params.min) {
                    params.min = curDiff;
                }
                params.prev = node.val;
            }
            inOrder(node.right, params);
        }
    };
    inOrder(root, params);
    return min;
};