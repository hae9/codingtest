function solution(nums) {
  nums.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return nums;
}

console.log(
  solution([
    [2, 3],
    [1, 4],
    [3, 1],
    [1, 2],
  ])
);
