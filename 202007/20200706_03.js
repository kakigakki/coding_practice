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
     * @return {boolean}
     */
var isPalindrome = function(head) {
    let h2 = head
    let s1 = ""
    let s2 = ""
    let prev = null
    let cur = head
    let forward = head
    while (cur) {
        s1 += cur.val
        forward = cur.next
        cur.next = prev
        prev = cur
        cur = forward
    }
    while (prev) {
        s2 += prev.val
        prev = prev.next
    }
    return h2
};

logList(isPalindrome(getListFromArray([1, 2, 3, 1])))