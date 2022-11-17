function solution(nums, k) {
  let cnt = 0;
  let left = 0;
  let answer = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) cnt++;
    while (cnt > k) {
      if (nums[left] === 0) cnt--;
      left++;
    }
    if (answer < right - left + 1) answer = right - left + 1;
  }
  return answer;
}

console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2));
// console.log(solution([1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1], 3));
// console.log(solution([0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1], 5));
// console.log(solution([1, 1, 0, 0, 1, 1, 0], 3));
