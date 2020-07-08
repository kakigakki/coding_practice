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

//两束相加
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0);
    let cur = l3;
    while (l1 || l2) {
        let Vals = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        let addedVal = Vals + cur.val;
        if (addedVal >= 10) {
            cur.val = addedVal % 10;
            cur.next = new ListNode(Math.floor(addedVal / 10));
        } else {
            cur.val += Vals;
            if ((l1 && l1.next) || (l2 && l2.next)) {
                cur.next = new ListNode(0);
            }
        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        cur = cur.next;
    }
    return l3;
};

logList(
    addTwoNumbers(getListFromArray([9, 9, 9, 4, 5]), getListFromArray([9, 9, 9]))
);