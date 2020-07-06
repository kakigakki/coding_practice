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

var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0)
    let cur = l3
    while (l1 && l2) {
        let addedVal = (l1.val + l2.val + cur.val)
        if (addedVal >= 10) {
            cur.val = (addedVal) % 10
            cur.next = new ListNode(Math.floor(addedVal / 10))
        } else {
            cur.val += l1.val + l2.val
            if (l1.next && l2.next) cur.next = new ListNode(0)
        }
        l1 = l1.next
        l2 = l2.next
        cur = cur.next
    }
    let leftNode = l1 || l2
    while (leftNode) {
        cur.val += leftNode.val
        cur = cur.next
        leftNode = leftNode.next
    }
    return l3
};

logList(addTwoNumbers(getListFromArray([9, 9, 9, 4, 5]), getListFromArray([9, 9, 9])))