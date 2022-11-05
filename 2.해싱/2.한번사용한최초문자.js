function solution(s) {
  let answer = -1;
  const sH = new Map();
  for (x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  console.log(sH);
  for (let i in s) {
    if (sH.get(s[i]) === 1) {
      return Number(i) + 1;
    }
  }

  return answer;
}

console.log(solution('statitsics'));
