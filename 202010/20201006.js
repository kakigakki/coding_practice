/* 计算给定二叉树的所有左叶子之和。

示例：

    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 */

// 使用字符串给左叶子或者右叶子做标记
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    return leftLeavesSum(root, "", sum);
};

var leftLeavesSum = function(node, flg, sum) {
    if (!node) return sum;
    if (!node.left && !node.right) {
        if (flg == "L") sum += node.val;
        return sum;
    }
    sum = leftLeavesSum(node.left, "L", sum);
    sum = leftLeavesSum(node.right, "R", sum);
    return sum;
};