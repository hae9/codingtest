// function solution(nums) {
//   console.log(nums);
//   let scores = [];
//   let score = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       if (nums[i - 1] === 1) {
//         score = score + 1;
//       } else score = 1;
//       scores.push(score);
//     }
//   }
//   return scores.reduce((prev, curr) => prev + curr, 0);
// }

console.log(solution1([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
console.log(solution1([1, 1, 1, 1, 1, 0, 1]));
console.log(solution1([0, 1, 0, 1, 0, 1, 1, 1]));
console.log(solution1([0, 0, 0, 0, 0]));
console.log(solution1([1, 0, 0, 0, 1]));

// foreach로
function solution1(nums) {
  let answer = 0;
  let score = 0;
  nums.forEach((num) => {
    if (num === 1) {
      score++;
      answer += score;
    } else {
      score = 0;
    }
  });
  return answer;
}

// nums.forEach((ele, idx, self)) => {})
// 각 요소, 인덱스, 호출한 그 배열자체
