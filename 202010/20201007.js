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
//中序遍历
var findMode = function(root) {
    let resHash = {};
    let resHash2 = [];
    inOrder(root, resHash);
    let maxValue = 0;
    for (const key in resHash) {
        if (resHash[key] >= maxValue) {
            const curMode = resHash2[0];
            if (curMode) {
                if (resHash[curMode] != resHash[key]) {
                    resHash2 = [];
                }
            }
            resHash2.push(key);
            maxValue = resHash[key];
        }
    }
    return resHash2;
};

var inOrder = function(node, resHash) {
    if (node) {
        inOrder(node.left, resHash);
        resHash[node.val] ? resHash[node.val]++ : (resHash[node.val] = 1);
        inOrder(node.right, resHash);
    }
};