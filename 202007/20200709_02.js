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

//旋转链表
var rotateRight = function(head, k) {
  if (!head || !head.next) {
    return head
  }
  let cur = head
    //保存链表的长度
  let length = 1
  while (cur.next) {
    length++
    cur = cur.next
  }
  //做成头尾相接的环形链表
  cur.next = head

  //前指针
  let fast = head
    //后指针
  let slow = head
  let index = 0
    //当 后指针 不指向head时,循环
  while (fast.next != head) {
    fast = fast.next
    index++
    //当 前指针 走了k%length步后,后指针开始走
    if (index > k % length) {
      slow = slow.next
    }
  }
  //后指针指向头部
  head = slow.next
    //后指针指向空
  slow.next = null
    //返回头
  return head
};

logList(rotateRight(getListFromArray([1, 2]), 3))