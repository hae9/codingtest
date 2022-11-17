// function solution(s) {
//   const stack = [];
//   for (let i = 0; i < s.length; i++) {
//     stack.push(s[i]);
//   }

//   for (let i = s.length - 1; i > 0; i--) {
//     if (stack[i - 1] === stack[i]) {
//       stack.splice(i - 1, 2);
//     }
//   }
//   return stack;
// }

console.log(solution1('acbbcaa'));
console.log(solution1('bacccaba'));
console.log(solution1('aabaababbaa'));
console.log(solution1('bcaacccbaabccabbaa'));

function solution1(s) {
  let stack = [];
  for (let x of s) {
    if (x === stack[stack.length - 1]) {
      stack.pop();
    } else stack.push(x);
  }
  return stack.join('');
}
