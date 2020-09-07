/* 
给定二叉搜索树（BST）的根节点和要插入树中的值，
将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 
保证原始二叉搜索树中不存在新值。

注意，可能存在多种有效的插入方式，
只要树在插入后仍保持为二叉搜索树即可。 你可以返回任意有效的结果。

*/

var insertIntoBST = function(root, val) {
    let newNode = new TreeNode(val);
    if (!root) {
        return newNode;
    }
    insert(root, newNode);
    return root;
};

function insert(root, newNode) {
    if (newNode.val > root.val) {
        if (root.right) {
            insert(root.right, newNode);
        } else {
            root.right = newNode;
            return;
        }
    } else if (newNode.val < root.val) {
        if (root.left) {
            insert(root.left, newNode);
        } else {
            root.left = newNode;
            return;
        }
    } else {
        return;
    }
}