function solution(nums) {
  for (let i = 1; i < nums.length; i++) {
    let tmp = nums[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (nums[j] > tmp) nums[j + 1] = nums[j];
      else break;
    }
    nums[j + 1] = tmp;
  }
  return nums;
}

console.log(solution([2, 8, 3, 6, 1, 7, 5, 9]));
console.log(solution([7, 6, 10, 9, 8]));
