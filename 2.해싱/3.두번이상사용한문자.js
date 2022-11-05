function solution(s) {
  const sH = new Map();
  for (x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
    if (sH.get(x) > 1) {
      return x;
    }
  }
  return -1;
}

console.log(solution('abccbaacz'));

// function solution(s) {
//   let answer = -1;
//   const sH = {};
//   for (x of s) {
//     sH[x] = (sH[x]||0)+1;
//     if (sH[x]>1) return x
//   }

//   return answer;
// }

// console.log(solution('abccbaacz'));
