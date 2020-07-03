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

//给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
var deleteDuplicates = function(head) {
    if (!head) return head
    let cur = head
    while (cur.next) cur.val == cur.next.val ? cur.next = cur.next.next : cur = cur.next
    return head
};


logList(deleteDuplicates(getListFromArray([1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5])))