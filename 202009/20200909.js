/* 
给定一个二叉树，检查它是否是镜像对称的。


例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

*/

//此题解法与判断相同树差不多相同
var isSymmetric = function(root) {
  if (root === null) return true;
  return isSym(root.left, root.right);
};

function isSym(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return isSym(p.left, q.right) && isSym(p.right, q.left);
}