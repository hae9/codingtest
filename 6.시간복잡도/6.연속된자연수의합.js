function solution(n) {
  let cnt = 0;
  let sum = 0;
  let left = 0;
  let nums = Array(Math.ceil(n / 2))
    .fill(0)
    .map((_, i) => i + 1);

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > n) {
      sum -= nums[left];
      left++;
    }
    if (sum === n) cnt++;
  }
  return cnt;
}

console.log(solution(15));
console.log(solution(45678));
console.log(solution(98765));
