//实现一个二叉搜素输的顺序迭代器
var BSTIterator = function(root) {
  this.root = root;
  this.arr = [];
  this.pointer = 0;
  this.inTravesal(this.root, this.arr);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.arr[this.pointer++];
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.pointer === this.arr.length ? false : true;
};

BSTIterator.prototype.inTravesal = function(node, arr) {
  if (node) {
    this.inTravesal(node.left, arr);
    arr.push(node.val);
    this.inTravesal(node.right, arr);
  }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */