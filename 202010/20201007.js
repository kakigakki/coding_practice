/* 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

假定 BST 有如下定义：

结点左子树中所含结点的值小于等于当前结点的值
结点右子树中所含结点的值大于等于当前结点的值
左子树和右子树都是二叉搜索树
例如：
给定 BST [1,null,2,2],

   1
    \
     2
    /
   2
返回[2].
 */

var findMode = function(root) {
    let res = {};
    inOrder(root, res);
    let maxValue = 0;
    for (const key in res) {
        if (res[key] > maxValue) {
            if (res2[0]) {
                if (res[res2[0]] != res[key]) {
                    res2 = [];
                }
            }
            res2.push(key);
            maxValue == res[key];
        }
    }
};

var inOrder = function(node, res) {
    if (node) {
        inOrder(node.left, res);
        res[node.val] ? res[node.val]++ : (res[node.val] = 0);
        inOrder(node.right, res);
    }
};