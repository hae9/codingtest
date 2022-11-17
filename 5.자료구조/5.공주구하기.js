function solution(N, K) {
  let queue = [];
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }
  console.log(queue);
  while (queue.length !== 1) {
    for (let i = 1; i < K; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }
  return queue[0];
}

console.log(solution(8, 3));
