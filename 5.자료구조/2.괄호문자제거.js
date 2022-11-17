// function solution(s) {
//   let cnt = 0;
//   let res = [];
//   for (i = 0; i < s.length; i++) {
//     if (s[i] === '(') {
//       cnt++;
//     }
//     if (s[i] === ')') {
//       cnt--;
//     }
//     console.log(cnt);
//     if (cnt === 0 && s[i] !== ')') {
//       res.push(s[i]);
//     }
//   }
//   return res.join('');
// }

console.log(solution1('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
console.log(solution1('((AF)B)(D)E(F)'));
console.log(solution1('(Aab)(EsG)FFD'));
console.log(solution1('(YYYDD)sh(kkf(hfs))'));

function solution1(s) {
  let stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(x);
    }
  }
  return stack.join('');
}
