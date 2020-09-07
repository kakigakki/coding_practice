/* 给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。 */

/* 
二叉树算法的设计的总路线：明确一个节点要做的事情，然后剩下的事抛给框架。

void traverse(TreeNode root) {
    // root 需要做什么？在这做。
    // 其他的不用 root 操心，抛给框架
    traverse(root.left);
    traverse(root.right);
}

*/

var isSameTree = function(p, q) {

    //都为空，则true
    if (p === null && q === null) return true
        //一个为空，则false
    if (p === null && q !== null) return false
    if (p !== null && q === null) return false
        //都不为空，但是值不同也为false
    if (p.val !== q.val) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};