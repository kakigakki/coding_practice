function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const getListFromArray = (a) => {
  let dummy = new ListNode();
  let pre = dummy;
  a.forEach((x) => (pre = pre.next = new ListNode(x)));
  return dummy.next;
};

const logList = (node) => {
  let str = "list: ";
  while (node) {
    str += node.val + "->";
    node = node.next;
  }
  str += "end";
  console.log(str);
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//删除排序链表中的重复元素 II  用了两次循环,挺慢的
var deleteDuplicates = function(head) {
  let cur = head
  let prev = null
  while (cur) {
    if (cur.next && cur.val == cur.next.val) {
      //当有重复节点时,设置一个暂时节点
      let temp = cur
        //循环暂时节点,将重复节点全部剔除
      while (temp.next && temp.val == temp.next.val) {
        temp = temp.next
      }
      //如果有prev,证明不在表头
      if (prev) {
        //被删除的重复节点(头)的前节点指向被删除的重复节点(尾巴)
        prev.next = temp.next
        cur = prev.next
      } else {
        head = temp.next
        cur = temp.next
      }
    } else {
      prev = cur
      cur = cur.next
    }
  }
  return head
};


//删除排序链表中的重复元素 II  用了两次循环,挺慢的
var deleteDuplicates2 = function(head) {
  let cur = head
  let fast = head
  let slow = head
  let prev = null
  let prev2 = null
  while (cur) {
    if (cur.next && fast.val != fast.next.val) {
      prev = slow
      slow = slow.next
    }
    prev2 = prev
    fast = fast.next
  }
  return head
};

logList(deleteDuplicates(getListFromArray([1, 1])))