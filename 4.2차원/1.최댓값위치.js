function solution(nums) {
  const numMax = Math.max(...nums.flat());
  console.log(numMax);
  for (i = 0; i < nums.length; i++) {
    if (nums[i].indexOf(numMax) !== -1) {
      return [i + 1, nums[i].indexOf(numMax) + 1];
    }
  }
}

console.log(
  solution2([
    [3, 23, 85, 34, 17, 74, 25, 52, 65],
    [10, 7, 39, 42, 88, 52, 14, 72, 63],
    [87, 42, 18, 78, 53, 45, 18, 84, 53],
    [34, 28, 64, 85, 12, 16, 75, 36, 55],
    [21, 77, 45, 35, 28, 75, 90, 76, 1],
    [25, 87, 65, 15, 28, 11, 37, 28, 74],
    [65, 27, 75, 41, 7, 89, 78, 64, 39],
    [47, 47, 70, 45, 23, 65, 3, 41, 44],
    [87, 13, 82, 38, 31, 12, 29, 29, 80],
  ])
);

// function solution1(nums) {
//   let max = 0;
//   let answer = [];
//   for (i = 0; i < nums.length; i++) {
//     for (j = 0; j < nums.length; j++) {
//       if (nums[i][j] > max) {
//         max = nums[i][j];
//         answer = [i + 1, j + 1];
//       }
//     }
//   }
//   return answer;
// }

function solution2(nums) {
  let max = 0;
  let answer = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i][j] > max) {
        max = nums[i][j];
        answer = [i + 1, j + 1];
      }
    }
  }
  return answer;
}
