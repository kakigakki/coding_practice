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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

//移除链表中指定的元素
var removeElements = function(head, val) {
    let cur = head
    let prev = null
    while (cur) {
        if (cur.val === val && cur == head) {
            head = cur.next
        } else if (cur.val === val) {
            prev.next = cur.next
        } else {
            prev = cur
        }
        cur = cur.next
    }
    return head
};

logList(removeElements(getListFromArray([1, 2, 1, 3, 1]), 1))

// if (cur.val === val) {
//     if (cur == head) {
//         head = cur.next
//     } else if (cur.next == null) {
//         prev.next = null
//     } else {
//         prev = cur
//         cur = cur.next

//     }
// }
// cur = cur.next