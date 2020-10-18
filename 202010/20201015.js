/* 给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

树的深度不会超过 1000。
树的节点总不会超过 5000。
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
//深度优先搜索
var maxDepth = function(root) {
    //初始化深度为0
    let dep = 0
    let calcDepth = function(node, dep) {
        //如果不存在root，则返回0
        if (!node) return dep
            //进入下一层后，深度跟着加1
        dep++
        //把全局深度赋值给局部深度
        let subDep = dep
        for (let i = 0; i < node.children.length; i++) {
            //让当前节点的所有子节点的深度进行大小比较，返回最大的那个
            subDep = Math.max(subDep, calcDepth(node.children[i], dep))
        }
        //返回当前节点上最大的深度
        return subDep
    }
    return calcDepth(root, dep)
};

//广度优先搜索
var maxDepth = function(root) {
    if (!root) return 0
    let queue = [root]
    let dep = 0
    while (queue.length) {
        let size = queue.length
        while (size--) {
            let curNode = queue.shift()
            curNode.children && (queue = queue.concat(curNode.children))
        }
        dep++
    }
    return dep
};