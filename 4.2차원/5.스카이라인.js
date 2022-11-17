// function solution(board) {
//   let front = [];
//   let side = [];
//   for (i = 0; i < board.length; i++) {
//     side.push(Math.max(...board[i]));
//     let col = [];
//     for (j = 0; j < board.length; j++) {
//       col.push(board[j][i]);
//     }
//     front.push(Math.max(...col));
//   }
//   // console.log(side);
//   // console.log(front);
//   let res = [];
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       let cnt = 0;
//       let num = board[i][j];
//       if (side[i] > front[j]) {
//         cnt = front[j] - num;
//       } else {
//         cnt = side[i] - num;
//       }
//       res.push(cnt);
//     }
//   }
//   return res.reduce((acc, cur) => acc + cur, 0);
// }

// console.log(
//   solution1([
//     [2, 5, 7, 3],
//     [6, 8, 9, 7],
//     [3, 2, 4, 5],
//     [7, 2, 5, 8],
//   ])
// );
// console.log(
//   solution1([
//     [3, 7, 6, 2],
//     [5, 3, 8, 7],
//     [3, 2, 5, 7],
//     [7, 7, 5, 3],
//   ])
// );
// console.log(
//   solution1([
//     [2, 5, 7, 3, 5],
//     [6, 8, 9, 7, 3],
//     [3, 2, 4, 5, 7],
//     [7, 2, 5, 8, 6],
//     [1, 2, 3, 4, 5],
//   ])
// );
console.log(
  solution2([
    [10, 11, 12, 11, 15],
    [15, 12, 13, 23, 11],
    [11, 13, 23, 25, 1],
    [11, 2, 3, 11, 13],
    [5, 7, 9, 10, 12],
  ])
);

// function solution1(board) {
//   const row = [];
//   const col = [];
//   for (let i = 0; i < board.length; i++) {
//     row.push(Math.max(...board[i]));
//     let max = 0;
//     for (let j = 0; j < board.length; j++) {
//       if (board[j][i] > max) {
//         max = board[j][i];
//       }
//     }
//     col.push(max);
//   }
//   let cnt = 0;
//   console.log(row);
//   console.log(col);
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       cnt = cnt + Math.min(row[i], col[j]) - board[i][j];
//     }
//   }
//   return cnt;
// }

function solution2(board) {
  let row = [];
  let col = [];
  for (let i = 0; i < board.length; i++) {
    let max1 = 0,
      max2 = 0;
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] > max1) max1 = board[i][j];
      if (board[j][i] > max2) max2 = board[j][i];
    }
    row.push(max1);
    col.push(max2);
  }
  let cnt = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      cnt += Math.min(row[i], col[j]) - board[i][j];
    }
  }
  return cnt;
}
