function solution(s) {
  let answer = [];
  let nH = new Map();
  for (let x of s) {
    nH.set(x, (nH.get(x) || 0) + 1);
  }
  console.log(nH);
  let maxL = Math.max(...nH.values());
  for (let x of 'abc') {
    answer.push(maxL - (nH.get(x) || 0));
  }
  return answer;
}

console.log(solution('aabb'));

function solution1(s) {
  let answer = [];
  let cnt = {};
  for (x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }
  console.log(cnt);
  const max = Math.max(...Object.values(cnt));
  for (x of 'abc') {
    answer.push(max - (cnt[x] || 0));
  }
  return answer;
}
console.log(solution1('aabb'));
