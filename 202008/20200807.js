var findSubstring = function(s, words) {
    let left = 0,
        right = 0,
        match = 0,
        window = {},
        target = {},
        res = []
    let wordLength
    if (words[0]) {
        wordLength = words[0].length
    } else {
        return res
    }
    for (const x of words) {
        target[x] ? target[x]++ : target[x] = 1
    }
    const targetLen = Object.keys(target).length
        //按需要查找的单词长度分成多次去滑动窗口，每次都让指针前进单词的长度。保证能够遍历到所有的情况
    for (let i = 0; i < wordLength; i++) {
        right = left = i
            //正常的滑动窗口的形式
        while (right <= s.length - wordLength) {
            const rightWord = s.substr(right, wordLength)
            if (target[rightWord]) {
                window[rightWord] ? window[rightWord]++ : window[rightWord] = 1
                if (window[rightWord] === target[rightWord]) match++
            }
            right += wordLength
            while (match === targetLen) {
                const leftWord = s.substr(left, wordLength)
                if (right - left == words.length * wordLength) {
                    res.push(left)
                }
                if (target[leftWord]) {
                    window[leftWord]--
                        if (window[leftWord] < target[leftWord]) match--
                }
                left += wordLength
            }
        }
        window = {}
        match = 0
    }
    return res
};



console.log(findSubstring("ababaab", ["ab", "ba", "ba"]));