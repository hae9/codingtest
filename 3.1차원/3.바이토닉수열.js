// function solution(nums) {
//   let arr = [];
//   let answer = 'NO';
//   for (i = 0; i < nums.length - 1; i++) {
//     arr.push(nums[i] < nums[i + 1]);
//     if (nums[i] === nums[i + 1]) return answer;
//   }
//   console.log(arr);
//   let cnt = 0;
//   if (arr[0] === true) {
//     for (i = 1; i < arr.length; i++) {
//       if (arr[i] !== arr[i - 1]) {
//         cnt++;
//       }
//     }
//     if (cnt === 1) answer = 'YES';
//   } else return answer;

//   return answer;
// }

console.log(solution1([1, 2, 3, 4, 5, 3, 1]));
console.log(solution1([1, 3, 4, 5, 5, 6, 4, 3]));
console.log(solution1([1, 2, 3, 4, 5]));

// mountain array = 바이토닉 수열
function solution1(nums) {
  let i = 0;
  const end = nums.length - 1;
  while (nums[i] < nums[i + 1] && i < end) {
    // out of range 이긴함.. 마지막 요소에서 +1을 하면 언디파인드라서 숫자랑 언디파인드 비교하면 false가 나와서 가능한 상황. && i < end 조건을 붙여주면 더 정확
    i++;
  }
  if (i === 0 || i === end) {
    return 'NO';
  }
  while (nums[i] > nums[i + 1]) {
    i++;
  }
  if (i !== end) {
    return 'NO';
  } else return 'YES';
}
