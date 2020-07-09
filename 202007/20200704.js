// inputに入力データ全体が入る
// function Main(input) {
//   console.log(/[A-Z]/.test(require("fs").readFileSync("/dev/stdin", "utf8")) ? "A" : "a");
// }


// Main(require("fs").readFileSync("/dev/stdin", "utf8"));



// function Main(input) {
//   let input = input.split("\n")
//   let count = input[0].split[" "][0]
//   let price = 0
//   console.log(count);
//   let all = input[1]
//   console.log(all);
//   all = all.sort((a, b) => {+a - +b })
//   for (let i = 0; i < count; i++) {
//     price += +all[i]
//   }
//   console.groupEnd(price)
// }

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));


// function Main(input) {
//   let index = 0
//   let result = ""
//   input = +input
//   for (let i = 0; i < input; i++) {
//     if (input > Math.pow(26, i) && input <= Math.pow(26, i + 1)) {
//       index = i
//       break
//     }
//   }
//   console.log(input, index);
//   if (index == 0) {
//     console.log(String.fromCodePoint(input + 96));
//     return
//   }

//   input = input - Math.pow(26, index - 1)
//   for (let j = index; j >= 1; j--) {
//     let b = input % 26

//     console.log(input, b, Math.pow(26, j));
//     result += String.fromCodePoint((Math.floor(input / Math.pow(26, j)) == 1 ? 26 : input - Math.pow(26, j)) + 96)
//     input = Math.floor(input / 26)
//     if (j == 1) {
//       result += String.fromCodePoint((b ? b : 26) + 96)
//     }
//     console.log(result);
//   }
// }


// Main(26 * 25);