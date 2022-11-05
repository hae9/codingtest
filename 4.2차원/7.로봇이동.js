function solution(board, k) {
  let a = 0;
  let b = 0;
  let cnt = 0;
  while (cnt < k) {
    while (board[a][b + 1] === 0) {
      b++;
      cnt++;
      if (cnt === k) {
        return [a, b];
      }
    }
    cnt++;
    console.log(a, b, cnt);
    while (board[a + 1][b] === 0) {
      a++;
      cnt++;
      if (cnt === k) {
        return [a, b];
      }
    }
    cnt++;
    console.log(a, b, cnt);
    while (board[a][b - 1] === 0) {
      b--;
      cnt++;
      if (cnt === k) {
        return [a, b];
      }
    }
    cnt++;
    while (board[a - 1][b] === 0) {
      a--;
      cnt++;
      if (cnt === k) {
        return [a, b];
      }
    }
    cnt++;
  }
}

console.log(
  solution(
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

console.log(
  solution(
    [
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 0],
    ],
    25
  )
);
