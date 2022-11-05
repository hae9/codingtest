function solution(nums) {
  let answer = 1;
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      answer++;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
console.log(solution([7, 7, 7, 7, 7, 7, 7]));
console.log(solution([7, 7, 7, 9, 9, 9, 12]));
