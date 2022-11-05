function solution(s, c) {
  let answer = 0;
  for (i = 0; i < s.length; i++) {
    // for(let x of s)
    if (s[i] === c) {
      answer += 1;
    }
  }
  return answer;
}
console.log(solution('COMPUTERPROGRAMMING', 'R'));
