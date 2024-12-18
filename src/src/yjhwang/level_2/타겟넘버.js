function solution(numbers, target) {
  let count = 0;

  function dfs(sum, index) {
    if (numbers.length === index) {
      if (sum === target) {
        count += 1;
      }
      return;
    }

    dfs(sum + numbers[index], index + 1);
    dfs(sum - numbers[index], index + 1);
  }

  dfs(0, 0);

  return count;
}

// console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));