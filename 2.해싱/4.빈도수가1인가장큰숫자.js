function solution(nums) {
  const map = new Map();

  for (x of nums) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  console.log(map);
  let answer = 0;
  for (let [key, val] of map) {
    if (val === 1) {
      if (key > answer) {
        answer = key;
      }
    }
  }
  return answer === 0 ? -1 : answer;
}

console.log(solution([3, 8, 3, 3, 5, 1, 1, 1, 7, 2, 2]));

// function solution()
