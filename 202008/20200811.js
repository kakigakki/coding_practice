/* 
给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。
 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。

*/
var searchBST = function(root, val) {
  let cur = root;
  while (cur) {
    if (val > cur.val) {
      cur = cur.right;
    } else if (val < cur.val) {
      cur = cur.left;
    } else {
      return cur;
    }
  }
  return null;
};