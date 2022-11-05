function solution(s) {
  let answer = '';
  s = s + ' ';
  let cnt = 1;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cnt++;
    } else if (cnt !== 1) {
      answer += s[i] + cnt;
      cnt = 1;
    } else {
      answer += s[i];
    }
  }
  return answer;
}

console.log(solution('AAABCCCDD"'));
