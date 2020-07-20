var isValidSudoku = function(board) {
  //所有列的二维数组
  let col = [];
  //所有9宫格的二维数组
  let block = [];
  //所有行的二维数组
  let row = [];
  //遍历每一行
  for (let i = 0; i < board.length; i++) {
    //初始化每一列
    col[i] = [];
    //初始化每一行
    row[i] = [];
    //遍历每一行的值
    for (let j = 0; j < board[i].length; j++) {
      //通过行和列算出每个块
      let k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      block[k] = block[k] || [];
      //当前要插入列中的元素
      let colElement = board[j][i];
      //当前要插入块中和行中的元素
      let rowAndBlockElement = board[i][j];
      if (
        (col[i].includes(colElement) && colElement != ".") ||
        (row[i].includes(rowAndBlockElement) &&
          rowAndBlockElement != ".") ||
        (block[k].includes(rowAndBlockElement) &&
          rowAndBlockElement != ".")
      ) {
        return false;
      } else {
        row[i].push(rowAndBlockElement);
        col[i].push(colElement);
        block[k].push(rowAndBlockElement);
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ])
);