function solution(board) {
  let front = [];
  let side = [];
  for (i = 0; i < board.length; i++) {
    side.push(Math.max(...board[i]));
    let col = [];
    for (j = 0; j < board.length; j++) {
      col.push(board[j][i]);
    }
    front.push(Math.max(...col));
  }
  console.log(side);
  console.log(front);
  let res = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let cnt = 0;
      let num = board[i][j];
      if (side[i] > front[j]) {
        cnt = front[j] - num;
      } else {
        cnt = side[i] - num;
      }
      res.push(cnt);
    }
  }
  return res.reduce((acc, cur) => acc + cur, 0);
}

console.log(
  solution([
    [2, 5, 7, 3],
    [6, 8, 9, 7],
    [3, 2, 4, 5],
    [7, 2, 5, 8],
  ])
);
console.log(
  solution([
    [3, 7, 6, 2],
    [5, 3, 8, 7],
    [3, 2, 5, 7],
    [7, 7, 5, 3],
  ])
);
console.log(
  solution([
    [2, 5, 7, 3, 5],
    [6, 8, 9, 7, 3],
    [3, 2, 4, 5, 7],
    [7, 2, 5, 8, 6],
    [1, 2, 3, 4, 5],
  ])
);
console.log(
  solution([
    [10, 11, 12, 11, 15],
    [15, 12, 13, 23, 11],
    [11, 13, 23, 25, 1],
    [11, 2, 3, 11, 13],
    [5, 7, 9, 10, 12],
  ])
);
