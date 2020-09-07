var fractionToDecimal = function(numerator, denominator) {
  let res = []
  let map = new Map()
    //处理正负数
  res.push(numerator / denominator >= 0 ? "" : "-")
  numerator = Math.abs(numerator)
  denominator = Math.abs(denominator)
  let yushu = numerator % denominator
  let shang = Math.floor(numerator / denominator)
  if (yushu == 0) {
    return res[0] + shang + ""
  } else {
    //处理小数
    res.push(shang)
    res.push(".")
  }
  while (!map.get(yushu)) //当没有存在余数时,进循环
  {
    map.set(yushu, 1)
    const numer = yushu * 10
    yushu = numer % denominator
    shang = numer / denominator | 0
    res.push(shang)
      //处理有限小数
    if (yushu == 0) {
      return res.join("")
    }
  }
  const mapKeys = [...map.keys()]
  res.splice(-(mapKeys.length - mapKeys.indexOf(yushu)), 0, "(")
  res.push(")")
  return res.join("")
};

console.log(fractionToDecimal(-2147483649, -1));