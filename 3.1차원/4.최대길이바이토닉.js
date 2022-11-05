function solution(nums) {
  // 바이토닉 수열 갯수 만큼 봉우리가 있음. 봉우리(인덱스)를 찾자
  // 봉우리가 나오려면 최소 3개의 숫자가 필요
  // 각 봉우리 마다 좌우로 몇개씩 감소, 증가하는지 카운트, 그 중에 제일 긴거
  let peaks = [];
  let answer = [];
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      peaks.push(i);
    }
  }
  console.log(peaks);
  for (let p of peaks) {
    let len = 1;
    let left = p;
    let right = p;
    while (nums[left - 1] < nums[left]) {
      len++;
      left--;
    }
    while (nums[right] > nums[right + 1]) {
      len++;
      right++;
    }
    answer.push(len);
  }
  return Math.max(...answer);
}

console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1]));
console.log(solution([1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]));
console.log(solution([1, 2, 3, 4, 5, 2, 1]));
console.log(solution([1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]));
console.log(solution([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]));
