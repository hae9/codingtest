// function solution(s) {
//   let answer = 'YES';
//   let cnt = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') {
//       cnt++;
//     }
//     if (s[i] === ')') {
//       cnt--;
//     }
//     if (cnt < 0) return (answer = 'NO');
//   }
//   if (cnt === 0) {
//     answer = 'YES';
//   } else {
//     answer = 'NO';
//   }
//   return answer;
// }

console.log(solution1('(())()'));
console.log(solution1('(()(()'));
console.log(solution1('()())'));
console.log(solution1('())('));

function solution1(s) {
  let stack = [];
  let answer = 'YES';
  for (let x of s) {
    if (x === '(') {
      stack.push('(');
    }
    if (x === ')') {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) answer = 'NO';
  return answer;
}
