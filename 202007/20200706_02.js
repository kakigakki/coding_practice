function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

const getListFromArray = (a) => {
    let dummy = new ListNode()
    let pre = dummy;
    a.forEach(x => pre = pre.next = new ListNode(x));
    return dummy.next;
}

const logList = (node) => {
    let str = 'list: ';
    while (node) {
        str += node.val + '->';
        node = node.next;
    }
    str += 'end';
    console.log(str);
}

//判断链表是否为环形链表
var hasCycle = function(head) {
    if (!head || !head.next) return false
    let fast = head.next.next,
        slow = head.next
    while (fast !== slow) {
        if (!fast || !fast.next) {
            return false
        }
        fast = fast.next.next
        slow = slow.next
    }
    return true
};