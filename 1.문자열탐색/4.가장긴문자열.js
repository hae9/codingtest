function solution(s) {
  let answer = '';
  let maxL = 0;
  for (let x of s) {
    if (x.length > maxL) {
      maxL = x.length;
      answer = x;
    }
  }
  return answer;
}

console.log(solution(['teacher', 'itistimes', 'student', 'beautiful', 'good']));
// 길이가 같으면 앞에있는 요소를 선택해야 하므로 부등호에 = 을 붙이면 안됨.
