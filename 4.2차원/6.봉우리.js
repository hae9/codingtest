// function solution(board) {
//   for (let i = 0; i < board.length; i++) {
//     board[i].unshift(0);
//     board[i].push(0);
//   }
//   let zero = Array(board.length + 2).fill(0);
//   board.unshift(zero);
//   board.push(zero);

//   console.log(board);
//   let cnt = 0;
//   for (let i = 1; i < board.length - 1; i++) {
//     for (let j = 1; j < board.length - 1; j++) {
//       if (
//         board[i][j] > board[i][j - 1] &&
//         board[i][j] > board[i][j + 1] &&
//         board[i][j] > board[i - 1][j] &&
//         board[i][j] > board[i + 1][j]
//       ) {
//         cnt++;
//       }
//     }
//   }
//   return cnt;
// }

console.log(
  solution2([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
// console.log(
//   solution([
//     [11, 15, 17, 23, 13, 5, 12],
//     [25, 18, 11, 16, 21, 7, 22],
//     [37, 13, 17, 22, 14, 11, 33],
//     [35, 27, 38, 34, 31, 22, 12],
//     [38, 22, 33, 21, 25, 33, 11],
//     [11, 33, 12, 13, 26, 35, 12],
//     [17, 22, 23, 11, 15, 13, 21],
//   ])
// );

// function solution1(board) {
//   const dx = [-1, 0, 1, 0];
//   const dy = [0, 1, 0, -1];
//   let cnt = 0;
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       let flag = true;
//       for (let k = 0; k < 4; k++) {
//         let nx = i + dx[k];
//         let ny = j + dy[k];
//         if (
//           nx >= 0 &&
//           nx < board.length &&
//           ny >= 0 &&
//           ny < board.length &&
//           board[i][j] <= board[nx][ny]
//         ) {
//           flag = false;
//           break;
//         }
//       }
//       console.log(flag);
//       if (flag === true) cnt++;
//     }
//   }
//   return cnt;
// }

function solution2(board) {}
