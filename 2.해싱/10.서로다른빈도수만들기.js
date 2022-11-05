function solution(s) {
  let cnt = {};
  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }
  console.log(cnt);

  let set = new Set();
  console.log(set);
  let answer = 0;
  for (let x of Object.keys(cnt)) {
    while (set.has(cnt[x])) {
      cnt[x]--;
      answer++;
    }
    if (cnt[x] === 0) continue;
    set.add(cnt[x]);
  }
  return answer;
}

console.log(solution('aebbbbc'));

// 정답
function solution1(s) {
  let cnt = {};
  let set = new Set();
  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }
  console.log(cnt);
  console.log(set);
  let del = 0;
  for (let x of Object.keys(cnt)) {
    console.log(x);
    console.log(set.has(cnt[x]));
    while (set.has(cnt[x])) {
      del++;
      cnt[x]--;
    }
    if (cnt[x] === 0) continue;
    set.add(cnt[x]);
    console.log(set);
  }
  return del;
}
console.log(solution1('aaabbbcc'));
console.log(solution2('aebbbbc'));
console.log(solution2('aaabbc'));

function solution2(s) {
  const cnt = {};
  let set = new Set();

  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }
  console.log(cnt);
  let del = 0;
  for (let key of Object.keys(cnt)) {
    while (set.has(cnt[key])) {
      del++;
      cnt[key]--;
    }
    if (cnt[key] === 0) continue;
    set.add(cnt[key]);
  }
  return del;
}
