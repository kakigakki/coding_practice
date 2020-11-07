/* 有序数组中查找第一个值值等于给定值的元素 */

//在arr中找到第一个val
function bsearch(arr, val) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (arr[mid] > val) {
            high = mid - 1
        } else if (arr[mid] < val) {
            low = mid + 1
        } else {
            if (arr[mid] === 0 || arr[mid - 1] !== val) {
                return mid
            } else {
                high = mid - 1
            }
        }
    }
    return -1
}

console.log(bsearch([1, 2, 3, 4, 5, 8, 8, 8, 9, 10], 8));


/* 有序数组中查找最后一个值等于给定值的元素 */

//在arr中找到最后一个val
function bsearch2(arr, val) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (arr[mid] > val) {
            high = mid - 1
        } else if (arr[mid] < val) {
            low = mid + 1
        } else {
            //找第一个与找最后一个，只有此步骤不相同
            if (mid === arr.length - 1 || arr[mid + 1] !== val) {
                return mid
            } else {
                low = mid + 1
            }
        }
    }
    return -1

}

console.log(bsearch2([1, 2, 3, 4, 5, 8, 8, 8, 9, 10], 8));


/* 查找第一个大于等于给定值的元素 */

//在arr中找到第一个大于等于给定值的元素
function bsearch3(arr, val) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (arr[mid] >= val) {
            if (mid === 0 || arr[mid - 1] < val) {
                return mid
            } else {
                high = mid - 1
            }
        } else {
            low = mid + 1
        }
    }
    return -1

}
console.log(bsearch3([1, 2, 3, 4, 5, 8, 8, 8, 9, 10], 3));
//在arr中找到最后一个小于等于给定值的元素
function bsearch4(arr, val) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (arr[mid] <= val) {
            if (mid === arr.length - 1 || arr[mid + 1] > val) {
                return mid
            } else {
                low = mid + 1
            }
        } else {
            high = mid - 1
        }
    }
    return -1

}

console.log(bsearch4([1, 2, 3, 4, 5, 8, 8, 8, 9, 10], 3));