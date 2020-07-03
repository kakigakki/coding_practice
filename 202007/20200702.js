function queueTime(customers, n) {
    //使用fill填充数据，就不用再一次循环了。
    let tills = new Array(n).fill(0)
    while (customers.length) {
        tills[0] += customers.shift()
        tills = tills.sort((a, b) => a - b)
    }
    return Math.max(...tills)
}

console.log(queueTime([1, 2, 3, 4, 5], 2));