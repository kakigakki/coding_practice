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

//给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
var removeNthFromEnd = function(head, n) {
    let cur = head
    let prev = null
    while (cur) {
        let temp = cur
        for (let i = 1; i <= n; i++) {
            if (temp.next) {
                temp = temp.next
                continue
            }
            prev ? prev.next = cur.next : head = cur.next
            return head
        }
        prev = cur
        cur = cur.next
    }
};

logList(removeNthFromEnd(getListFromArray([1, 2, 3, 4, 5]), 1))