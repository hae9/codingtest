function solution(s) {
  let answer = 0;
  // for (let x of s) {
  //   const cha = x.charCodeAt();
  //   if (64 < cha && cha < 91) {
  //     answer += 1;
  //   }
  // }
  s = s.split(' ').join('');
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

console.log(solution('IT IS TIME TO GO'));
