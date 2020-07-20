//给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

//用26个质数来代表26个字母,这样当字母乘积是一样的时候,字母也肯定也是一样的了.

/* 算术基本定理，又称为正整数的唯一分解定理，即：每个大于1的自然数，
要么本身就是质数，要么可以写为2个以上的质数的积，而且这些质因子按大小排列之后，写法仅有一种方式。 */

var groupAnagrams = function(strs) {
  let prime = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
  ];

  let map = new Map();
  // for (const str of strs) {
  //   let temp = str
  //     .split("")
  //     .reduce((prev, cur) => prev * prime[cur.codePointAt() - 97], 1);
  //   map.has(temp) ? map.get(temp).push(str) : map.set(temp, [str]);
  // }
  // return [...map.values()];

  for (const str of strs) {
    let temp = 1;
    for (const s of str) {
      temp *= prime[s.codePointAt() - 97];
    }
    map.has(temp) ? map.get(temp).push(str) : map.set(temp, [str]);
  }
  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));