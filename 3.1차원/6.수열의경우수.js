function solution(nums) {
  let peaks = [];
  let answer = [];
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      peaks.push(i);
    }
  }
  console.log(peaks);
  for (let p of peaks) {
    let cntleft = 0;
    let cntright = 0;
    let left = p;
    let right = p;
    while (nums[left - 1] < nums[left]) {
      cntleft++;
      left--;
    }
    while (nums[right] > nums[right + 1]) {
      cntright++;
      right++;
    }
    answer.push(cntleft * cntright);
  }
  return answer.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1]));
console.log(solution([1, 2, 3, 4, 5, 3, 2, 1]));
console.log(solution([1, 1, 3, 1, 2, 1, 3, 5, 6, 7, 2, 1]));
