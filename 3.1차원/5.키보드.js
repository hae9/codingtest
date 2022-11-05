function solution(s, k) {
  let answer = 0;
  let set = new Set();
  for (let x of s) {
    set.add(x.toLowerCase());
  }
  answer = set.size;
  if (s.toLowerCase() !== s) {
    answer = answer + 1;
  }
  if (answer <= k) {
    return 'true';
  } else return 'false';
}

console.log(solution('teacher', 6));
console.log(solution('Teacher', 6));
console.log(solution('TeacHer', 7));
console.log(solution('LifeisGood', 8));
console.log(solution('Gabg', 4));
