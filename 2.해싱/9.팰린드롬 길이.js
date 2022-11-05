function solution(s) {
  let sH = new Map();
  let cntPairs = 0;
  let cntOdd = 0;
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  console.log(sH);
  for (let value of sH.values()) {
    cntPairs += parseInt(value / 2, 10);
  }
  for (let val of sH.values()) {
    val = val % 2;
    if (val !== 0) {
      cntOdd++;
    }
  }
  if (cntOdd > 0) {
    return cntPairs * 2 + 1;
  } else {
    return cntPairs * 2;
  }
}

console.log(solution('abcbbbccaa'));
console.log(solution('abcde'));
console.log(solution('ccc'));

// 정답
function solution1(s) {
  let sH = {};
  let odd = 0;
  for (let x of s) {
    sH[x] = (sH[x] || 0) + 1;
  }
  console.log(sH);
  for (let key of Object.keys(sH)) {
    if (sH[key] % 2 == 1) odd++;
  }
  return odd > 0 ? s.length - odd + 1 : s.length;
}

console.log(solution1('abcbbbccaa'));
console.log(solution1('abcde'));
console.log(solution1('ccc'));

function solution2(s) {
  let cnt = {};
  let odd = 0;
  for (x of s) {
    // 문자열에 들어있는 문자와 각 문자의 갯수
    cnt[x] = (cnt[x] || 0) + 1;
  }
  console.log(cnt);
  let keys = Object.keys(cnt);
  for (let x of keys) {
    // 문자의 갯수가 홀수인 문자 카운트
    if (cnt[x] % 2 === 1) odd++;
  }
  console.log(odd);
  // 홀수개인 문자가 있으면
  return odd > 0 ? s.length - odd + 1 : s.length;
}
console.log(solution2('abcbbbccaa'));
console.log(solution2('abcde'));
console.log(solution2('ccc'));
