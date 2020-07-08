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

//两两交换节点，递归解法
var swapPairs1 = function(head) {
    if (!head || !head.next) {
        return head
    }

    //node 1st
    let next = head.next

    //第一个节点的下一个节点为第三个节点，进行递归，当null时开始弹出函数栈返回null -> 当前函数的第一个节点
    head.next = swapPairs(next.next)

    //第二个节点的下一个节点指向第一个节点，完成当前函数栈的交换
    next.next = head

    //返回当前函数栈的第二个节点（此时为第一个节点）
    return next
};


//两两交换节点，迭代解法
var swapPairs = function(head) {
    let prehold = new ListNode(-1)
    let holdhead = prehold
    holdhead.next = head
    while (holdhead.next && holdhead.next.next) {
        //保存第一个节点
        let start = holdhead.next
            //保存第二个节点
        let end = holdhead.next.next

        //第一个节点指向第三个节点
        start.next = end.next
            //第二个节点指向旧的第一个节点
        end.next = start
            //新的第一个节点指向旧的第二个节点
        holdhead.next = end

        //当前节点前进两步
        holdhead = holdhead.next.next
    }
    return prehold.next
};

logList(swapPairs(getListFromArray([1, 2, 4, 3, 5, 6])))