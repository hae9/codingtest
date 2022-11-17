// function solution(board, k) {
//   let a = 0;
//   let b = 0;
//   let cnt = 0;
//   while (cnt < k) {
//     while (board[a][b + 1] === 0) {
//       b++;
//       cnt++;
//       if (cnt === k) {
//         return [a, b];
//       }
//     }
//     cnt++;
//     console.log(a, b, cnt);
//     while (board[a + 1][b] === 0) {
//       a++;
//       cnt++;
//       if (cnt === k) {
//         return [a, b];
//       }
//     }
//     cnt++;
//     console.log(a, b, cnt);
//     while (board[a][b - 1] === 0) {
//       b--;
//       cnt++;
//       if (cnt === k) {
//         return [a, b];
//       }
//     }
//     cnt++;
//     while (board[a - 1][b] === 0) {
//       a--;
//       cnt++;
//       if (cnt === k) {
//         return [a, b];
//       }
//     }
//     cnt++;
//   }
// }

console.log(
  solution1(
    [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
    ],
    10
  )
);

// console.log(
//   solution(
//     [
//       [0, 0, 0, 0, 1, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 1],
//       [1, 0, 1, 0, 1, 0, 0],
//       [0, 0, 0, 0, 1, 0, 0],
//       [0, 0, 0, 1, 0, 0, 0],
//       [1, 0, 1, 0, 0, 0, 0],
//     ],
//     25
//   )
// );

function solution1(board, k) {
  let d = 1;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const n = board.length;
  let cnt = 0,
    x = 0,
    y = 0,
    nx,
    ny;

  while (cnt < k) {
    cnt++;
    nx = x + dx[d];
    ny = y + dy[d];
    if (nx < 0 || nx >= n || ny < 0 || ny >= n || board[nx][ny] === 1) {
      d = (d + 1) % 4;
      continue;
    }
    x = nx;
    y = ny;
  }
  return [x, y];
}
