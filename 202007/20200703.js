//合并两个升序链表
var mergeTwoLists = function(l1, l2) {
    let cur1 = l1
    let cur2 = l2
    let prev = null
    let newHead = null


    if (!cur1) return cur2
    if (!cur2) return cur1
        //判断第一个节点的大小，设置新链表的表头
    if (cur1.val <= cur2.val) {
        prev = cur1
        cur1 = cur1.next
    } else {
        prev = cur2
        cur2 = cur2.next
    }
    newHead = prev

    //同时迭代两个链表并比较较小的节点，将其赋值给prev
    while (cur1 && cur2) {
        if (cur1.val <= cur2.val) {
            prev.next = cur1
            prev = cur1
            cur1 = cur1.next

        } else {
            prev.next = cur2
            prev = cur2
            cur2 = cur2.next
        }
    }

    //获得剩下的非空链表，然后赋值给新链表
    let cur = cur1 || cur2
    while (cur) {
        prev.next = cur
        prev = cur
        cur = cur.next
    }
    prev.next = null

    //返回新链表的表头
    return newHead
};