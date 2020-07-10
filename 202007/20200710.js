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

//给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
var partition = function(head, x) {
    if (!head || !head.next) {
        return head;
    }
    //设置第一个哨兵，用于存储小于x的节点
    let hold1 = new ListNode(-1);
    //设置第二个哨兵，用于存储大于等于x的节点
    let hold2 = new ListNode(-1);
    let hold1H = hold1;
    let hold2H = hold2;
    let cur = head;
    while (cur) {
        if (cur.val < x) {
            hold1H.next = cur;
            hold1H = hold1H.next;
        } else {
            hold2H.next = cur;
            hold2H = hold2H.next;
        }
        cur = cur.next;
    }
    //将存在两个节点的链表变为一个节点
    hold1H.next ? (hold1H.next = null) : (hold2H.next = null);
    //合并前哨兵和后哨兵
    hold1H.next = hold2.next;
    return hold1.next;
};

logList(partition(getListFromArray([1, 4, 6, 8, 100, 3, 2, 5, 2, 1]), 3));