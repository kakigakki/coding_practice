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
//排序列表，归并算法
var sortList = function(head) {
    //快慢指针找出中间节点，然后分段
    let preHold = new ListNode(0)
    let shaobin = preHold
    shaobin.next = head
    let slow = head
    let fast = head
    while (!fast || !fast.next) {
        shaobin = shaobin.next
        slow = slow.next
        fast = fast.next.next
    }
    shaobin = null
    if (slow.next) {
        //如果不是只剩下一个节点，递归
        let newList1 = sortList(slow)
    }



};