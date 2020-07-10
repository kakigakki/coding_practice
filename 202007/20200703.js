//合并两个升序链表
var mergeTwoLists = function(l1, l2) {
    let cur1 = l1;
    let cur2 = l2;
    let dummy = new ListNode(-1);
    let dummyCur = dummy;

    //同时迭代两个链表并比较较小的节点，将其赋值给prev
    while (cur1 && cur2) {
        if (cur1.val <= cur2.val) {
            dummyCur.next = cur1;
            cur1 = cur1.next;
        } else {
            dummyCur.next = cur2;
            cur2 = cur2.next;
        }
        dummyCur = dummyCur.next;
    }

    //获得剩下的非空链表，然后赋值给新链表
    dummyCur.next = cur1 || cur2;
    //返回新链表的表头
    return dummy.next;
};