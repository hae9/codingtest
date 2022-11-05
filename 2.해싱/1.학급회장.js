function solution(s) {
  let answer = '';
  const sH = new Map();
  for (x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  let max = 0; //Number.MIN_SAFE_INTEGER
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

console.log(solution('BACBACCACCBDEDE'));
