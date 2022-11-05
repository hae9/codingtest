// 팰린드롬 확인
// 소문자로만 이루어진 문자열, 재배치해서 회문 만들수 있는지

function solution(s) {
  let sH = new Map();
  let cnt = 0;
  for (let x of s) {
    // 문자열 돌면서 맵에 각 문자, 갯수 넣기
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  console.log(sH);
  for (let val of sH.values()) {
    // 각 문자열 value값 홀수인 문자 갯수 카운트하기
    console.log(val);
    val = val % 2;
    if (val === 1) {
      cnt++;
    }
  }
  return cnt <= 1; // 홀수인 문자가 1보다 작은지 확인하여 불린값 리턴
}

console.log(solution('abcbbbe'));

// 정답
function solution1(s) {
  let cnt = {};
  let odd = 0;
  for (let x of s) {
    // 문자열 돌면서 객체에 해당문자 몇개인지 넣기
    cnt[x] = (cnt[x] || 0) + 1;
  }
  console.log(cnt);
  let keys = Object.keys(cnt); // 만든 객체의 키값들 배열로 만들기

  console.log(keys);

  for (let x of keys) {
    // 해당 문자열의 value값 홀수인 문자 갯수 카운트
    if (cnt[x] % 2 == 1) odd++;
  }
  return odd <= 1;
}

console.log(solution1('abcbbbe'));

// let vals = Object.values(cnt);
// 만든 객체 밸류값 배열로 만들기
// console.log(vals);
