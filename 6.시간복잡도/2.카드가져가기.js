// function solution(nums, k) {
//   let sum = 0;
//   for (let i = 0; i < k; i++) {
//     sum += nums[i];
//   }
//   let answer = sum;
//   console.log(sum);
//   for (let i = 1; i <= k; i++) {
//     sum += nums[nums.length - i] -nums[k - i];
//     answer = Math.max(answer, sum);
//   }
//   return answer;
// }

console.log(solution([2, 3, 7, 1, 2, 1, 5], 4));
console.log(solution([1, 30, 5, 6, 7], 3));
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5));

function solution(nums, k) {
  let answer = nums.reduce((a, b) => a + b, 0);
  let len = nums.length - k;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
  }
  let minS = sum;
  let left = 0;
  for (let i = len; i < nums.length; i++) {
    sum += nums[i] - nums[left];
    minS = Math.min(sum, minS);
    left++;
  }
  return answer - minS;
}

// function solution(nums, k) {
//   let answer = nums.reduce((a, b) => a+b , 0)
//   let sum = 0;
//   let len = nums.length - k
//   for(let i =0; i<len; i++) {
//     sum += nums[i]
//   }
//   let minS = sum
//   let left = 0;
//   for(let right = len; right< nums.length; right++) {
//     sum += nums[right] - nums[left]
//     minS = Math.min(sum, minS)
//     left ++
//   }
//   return answer - minS
// }
