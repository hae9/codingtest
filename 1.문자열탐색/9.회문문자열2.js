// function solution(s) {
//   let answer = '';
//   for (let i = 0; i < s.length; i++) {
//     let arrR = s.split('');
//     arrR.splice(i, 1);
//     arrR = arrR.reverse().join('');
//     let arrO = s.split('');
//     arrO.splice(i, 1);
//     arrO = arrO.join('');

//     if (arrR !== arrO) {
//       answer = 'NO';
//     } else {
//       answer = 'YES';
//       break;
//     }
//   }
//   return answer;
// }

// console.log(solution('abcacbakcba'));

// function solution(s) {
//   let answer = 'NO';
//   let str = '';

//   for (let i = 0; i < s.length; i++) {
//     str = s.split('');
//     str.splice(i, 1);
//     if (str.join('') === str.reverse().join('')) answer = 'YES';
//   }

//   return answer;
// }

// console.log(solution('abcbdcba')); // YES
// console.log(solution('abcabbakcba')); // YES
// console.log(solution('abcacbakcba')); // NO

function solution(s) {
  let answer = 'NO';
  let str = '';

  for (let i = 0; i < s.length; i++) {
    str = s.split('');
    str.splice(i, 1);
    if (str.join('') === str.reverse().join('')) answer = 'YES';
  }

  return answer;
}

console.log(solution('abcbdcba')); // YES
console.log(solution('abcabbakcba')); // YES
console.log(solution('abcacbakcba')); // NO
