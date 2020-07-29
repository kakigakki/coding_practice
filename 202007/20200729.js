/* 所有 DNA 都由一系列缩写为 A，C，G 和 T 的核苷酸组成，
例如：“ACGAATTCCG”。在研究 DNA 时，
识别 DNA 中的重复序列有时会对研究非常有帮助。

编写一个函数来查找目标子串，目标子串的长度为 10，
且在 DNA 字符串 s 中出现次数超过一次。

*/

var findRepeatedDnaSequences = function(s) {
    let map = {};
    let set = new Set();
    if (s <= 9) return [];
    for (let i = 0; i < s.length; i++) {
        const subStr = s.slice(i, i + 10);
        if (map[subStr]) {
            set.add(subStr);
        } else {
            map[subStr] = 1;
        }

        if (s[i + 10] == undefined) break;
    }
    return [...set];
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));