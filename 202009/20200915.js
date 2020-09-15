/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return []
  let res = []
  let queue = []
  queue.push(root)
  while (queue.length) {
    let subRes = []
    let levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      let cur = queue.shift()
      subRes.push(cur.val)
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }

    res.unshift(subRes)
  }
  return res
};