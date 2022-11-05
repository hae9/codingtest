function solution(board) {
  let answer = 0;
  for (i = 0; i < board.length; i++) {
    if (board[i].reduce((acc, cur) => acc + cur, 0) > answer)
      answer = board[i].reduce((acc, cur) => acc + cur, 0);
  }
  for (i = 0; i < board.length; i++) {
    let col = [];
    for (j = 0; j < board.length; j++) {
      col.push(board[j][i]);
    }
    console.log(col);
    if (col.reduce((acc, cur) => acc + cur, 0) > answer)
      answer = col.reduce((acc, cur) => acc + cur, 0);
  }
  let dia1 = [];
  for (i = 0; i < board.length; i++) {
    dia1.push(board[i][i]);
  }
  if (dia1.reduce((acc, cur) => acc + cur, 0) > answer)
    answer = dia1.reduce((acc, cur) => acc + cur, 0);
  let dia2 = [];
  for (i = 0; i < board.length; i++) {
    dia2.push(board[i][i]);
  }
  if (dia2.reduce((acc, cur) => acc + cur, 0) > answer)
    answer = dia2.reduce((acc, cur) => acc + cur, 0);

  return answer;
}

console.log(
  solution([
    [57, 65, 22, 33, 11, 11],
    [15, 66, 77, 34, 21, 13],
    [55, 12, 11, 55, 11, 55],
    [54, 33, 66, 88, 11, 22],
    [88, 99, 12, 16, 18, 33],
    [11, 100, 22, 68, 88, 17],
  ])
);
