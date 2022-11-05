// 팰린드롬 분할
// 소문자로만 이루어진 문자열, 해당 문자열의 문자를 모두 사용해
// k개의 회문을 만들수 있는지 확인

function solution(s, k) {
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
  console.log(cntPairs);
  console.log(cntOdd);
  if (cntPairs >= k && cntOdd < k) {
    return true;
  } else return false;
}

console.log(solution('abcabcabcca', 2));

// 정답
function solution1(s, k) {
  if (s.length < k) return false; // 해당문자열이 k보다 작으면 무조건 false
  let cnt = {};
  let odd = 0;
  for (let x of s) {
    // 각 문자의 갯수 객체에 담기
    cnt[x] = (cnt[x] || 0) + 1;
  }
  console.log(cnt);
  let keys = Object.keys(cnt);
  console.log(keys);
  for (let x of keys) {
    if (cnt[x] % 2 == 1) odd++;
  }
  return odd <= k;
}

console.log(solution1('abcabcabcca', 3));
console.log(solution1('aabbccee', 2));
console.log(solution1('abcabcabc', 2));

function solution2(s, k) {
  // 주어진 문자열이 k보다 작으면 무조건 false 반환
  if (s.length < k) return false;
  let cnt = {};
  let odd = 0;
  for (let x of s) {
    // 문자열에 들어있는 각 문자, 갯수 객체에 넣기
    cnt[x] = (cnt[x] || 0) + 1;
  }
  // 객체의 키값을 담은 배열 만들기
  let keys = Object.keys(cnt);
  for (let x of keys) {
    // 문자의 갯수가 홀수인 문자 카운트
    if (cnt[x] % 2 === 1) odd++;
  }
  console.log(odd);
  return odd <= k; // 홀수인 문자가 k보다 작거나 같으면 true 반환
}

console.log(solution2('abcabcabcca', 3));
console.log(solution2('aabbccee', 2));
console.log(solution2('abcabcabc', 2));
