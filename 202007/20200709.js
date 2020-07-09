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
//归并排序
var sortList = function(head) {
  //如果只有一个就停止分裂
  if (!head || !head.next) {
    return head
  }

  //获取分裂后的前后两段的链表
  let {
    left,
    right
  } = twoPart(head)
    //继续分裂(前后两段各自递归)
  let l1 = sortList(right)
  let l2 = sortList(left)
    //合并
  return concat(l1, l2)
}

//分裂链表
var twoPart = function(head) {
  let fast = head
  let slow = head
    //设置一个哨兵,用于获取前半段链表
  let temphead = new ListNode(-1)
  let temp = temphead
  while (fast && fast.next) {
    temp.next = slow
    temp = temp.next
    slow = slow.next
    fast = fast.next.next
  }
  temp.next = null
  return { left: slow, right: temphead.next }
};

//合并链表
var concat = function(l1, l2) {

  //设置一个哨兵,用于获取合并后的链表
  let prehold = new ListNode(-1)
  let hold = prehold
  while (l1 && l2) {
    if (l1.val < l2.val) {
      hold.next = l1
      l1 = l1.next
    } else {
      hold.next = l2
      l2 = l2.next
    }
    hold = hold.next
  }
  hold.next = l1 || l2
  return prehold.next
}