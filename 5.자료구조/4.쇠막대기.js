function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        stack.pop();
        answer += stack.length;
      } else {
        stack.pop();
        answer += 1;
      }
    } else stack.push(s[i]);
  }
  return answer;
}

console.log(solution('()(((()())(())()))(())'));
console.log(solution('(((()(()()))(())()))(()())'));
console.log(solution('((((()))))'));
console.log(solution('(((())))(())((()))'));
