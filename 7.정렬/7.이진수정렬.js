function solution(nums) {
  const pair = [];
  nums.forEach((e) => {
    let tmp = e,
      cnt = 0;
    while (tmp > 0) {
      cnt += tmp % 2;
      tmp = parseInt(tmp / 2, 10);
    }
    pair.push([e, cnt]);
  });
  console.log(pair);
  pair.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  const answer = [];
  pair.forEach((e) => answer.push(e[0]));
  return answer;
}

console.log(solution([5, 6, 7, 8, 9]));
console.log(solution([5, 4, 3, 2, 1]));
