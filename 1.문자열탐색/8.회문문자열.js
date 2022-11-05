// function solution(s) {
//   let answer = '';
//   const S = s.toUpperCase();
//   const R = S.split('').reverse().join('');
//   if (S === R) {
//     answer = 'YES';
//   } else {
//     answer = 'NO';
//   }
//   return answer;
// }

// console.log(solution('Moon'));

function solution(input) {
  input = input.toUpperCase();
  let l = 0;
  let r = input.length - 1;

  while (l < r) {
    if (input[l] !== input[r]) {
      console.log(input[l], input[r]);
      return 'NO';
    }
    l++;
    r--;
  }
  return 'YES';
}

let input = 'goog';

console.log(solution(input));
