// function solution(board) {
//   let answer = 0;
//   for (i = 0; i < board.length; i++) {
//     if (board[i].reduce((acc, cur) => acc + cur, 0) > answer)
//       answer = board[i].reduce((acc, cur) => acc + cur, 0);
//   }
//   for (i = 0; i < board.length; i++) {
//     let col = [];
//     for (j = 0; j < board.length; j++) {
//       col.push(board[j][i]);
//     }
//     console.log(col);
//     if (col.reduce((acc, cur) => acc + cur, 0) > answer)
//       answer = col.reduce((acc, cur) => acc + cur, 0);
//   }
//   let dia1 = [];
//   for (i = 0; i < board.length; i++) {
//     dia1.push(board[i][i]);
//   }
//   if (dia1.reduce((acc, cur) => acc + cur, 0) > answer)
//     answer = dia1.reduce((acc, cur) => acc + cur, 0);
//   let dia2 = [];
//   for (i = 0; i < board.length; i++) {
//     dia2.push(board[i][i]);
//   }
//   if (dia2.reduce((acc, cur) => acc + cur, 0) > answer)
//     answer = dia2.reduce((acc, cur) => acc + cur, 0);

//   return answer;
// }

// console.log(
//   solution1([
//     [10, 13, 10, 12, 15],
//     [12, 39, 30, 23, 11],
//     [11, 25, 50, 53, 15],
//     [19, 27, 29, 37, 27],
//     [19, 13, 30, 13, 19],
//   ])
// );
// console.log(
//   solution1([
//     [17, 19, 12, 11, 15],
//     [17, 36, 30, 83, 11],
//     [19, 30, 70, 53, 75],
//     [17, 22, 67, 47, 37],
//     [15, 37, 78, 93, 59],
//   ])
// );
console.log(
  solution2([
    [57, 65, 22, 33, 11, 11],
    [15, 66, 77, 34, 21, 13],
    [55, 12, 11, 55, 11, 55],
    [54, 33, 66, 88, 11, 22],
    [88, 99, 12, 16, 18, 33],
    [11, 100, 22, 68, 88, 17],
  ])
);

// function solution1(board) {
//   let max1 = 0;
//   let max2 = 0;
//   for (let i = 0; i < board.length; i++) {
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let j = 0; j < board.length; j++) {
//       sum1 = sum1 + board[i][j];
//       sum2 = sum2 + board[j][i];
//     }
//     if (Math.max(sum1, sum2) > max1) {
//       max1 = Math.max(sum1, sum2);
//     }
//   }
//   let sum3 = 0;
//   let sum4 = 0;
//   for (let i = 0; i < board.length; i++) {
//     sum3 = sum3 + board[i][i];
//     sum4 = sum4 + board[i][board.length - 1 - i];
//   }
//   max2 = Math.max(sum3, sum4);
//   const answer = Math.max(max1, max2);
//   return answer;
// }

function solution2(board) {
  let max1 = 0;
  let max2 = 0;
  for (let i = 0; i < board.length; i++) {
    let sum1 = 0,
      sum2 = 0;
    for (let j = 0; j < board.length; j++) {
      sum1 += board[i][j];
      sum2 += board[j][i];
    }
    if (max1 < Math.max(sum1, sum2)) {
      max1 = Math.max(sum1, sum2);
    }
  }
  let sum3 = 0,
    sum4 = 0;
  for (let i = 0; i < board.length; i++) {
    sum3 += board[i][i];
    sum4 += board[i][board.length - 1 - i];
  }
  max2 = Math.max(sum3, sum4);
  return Math.max(max1, max2);
}
