function solution(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let answer = sum;
  let left = 0;
  for (let right = k; right < nums.length; right++) {
    sum += nums[right] - nums[left];
    answer = Math.max(answer, sum);
    left++;
  }
  return answer;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5));
console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4));

// function solution(nums, k) {
//   let answer = 0;
//   for (let i = 0; i < nums.length - k + 1; i++) {
//     let sum = 0;
//     for (let j = i; j < i + k; j++) {
//       sum += nums[j];
//     }
//     console.log(sum);
//     answer = Math.max(sum, answer);
//   }
//   return answer;
// }
