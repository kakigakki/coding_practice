var findAnagrams = function(s, p) {
    let res = [];
    let map = {}
    let pSorted = p.split("").sort().join("")
    for (let i = 0; i < s.length - (p.length - 1); i++) {
        let windowStr = "";
        windowStr = s.substr(i, p.length)
        if (windowStr.split("").sort().join("") == pSorted) {
            res.push(i)
        }

    }
    return res;
};
console.log(findAnagrams("cbaebabacd", "abc"));

var findAnagrams = function(s, p) {
    let res = [];
    for (let i = 0; i < s.length - (p.length - 1); i++) {
        let code;
        let pIndex = 0;
        for (let j = i; j < i + p.length; j++) {
            code ^= s[j].codePointAt() ^ p[pIndex++].codePointAt();
        }
        if (code == 0) {
            res.push(i);
        }
    }
    return res;
};
console.log(findAnagrams("aabb", "bb"));