function solution(nums, m) {
  let sum = 0;
  let answer = 0,
    left = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > m) {
      sum -= nums[left];
      left++;
    }
    if (sum === m) answer++;
  }
  return answer;
}

console.log(solution([1, 1, 2, 1, 3, 1, 1, 1, 2], 6));
console.log(solution([1, 1, 1, 1, 1, 1, 3], 3));
console.log(solution([1, 2, 1, 2, 1, 2, 1], 3));
console.log(solution([5, 5, 5], 5));

// function solution(nums, m) {  시간복잡도 탈락..
//   let cnt = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum === m) cnt++;
//     }
//   }
//   return cnt;
// }
