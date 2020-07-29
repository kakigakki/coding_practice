var fractionToDecimal = function(numerator, denominator) {
    let map = [];
    let num = numerator / denominator + "";
    if (num.includes(".")) {
        const sub = num.split(".");
        const substr = sub[0];
        const substr2 = sub[1];
        for (let i = 0; i < substr2.length; i++) {
            const idx = map.indexOf(substr2[i]);
            if (idx >= 0) {
                map.splice(idx, 0, "(");
                map.push(")");
                break;
            }
            map.push(substr2[i]);
        }
        num = substr + "." + map.join("");
    }
    return num;
};

console.log(fractionToDecimal(1, 333));