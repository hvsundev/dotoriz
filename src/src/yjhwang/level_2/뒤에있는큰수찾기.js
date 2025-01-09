function solution(numbers) {
  const result = new Array(numbers.length).fill(-1);
  for (let i = numbers.length - 2; i >= 0; i--) {
    const currentNumber = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const compareNumber = numbers[j];
      if (currentNumber < compareNumber) {
        result[i] = compareNumber;
        break;
      } else {
        if (result[j] === -1) {
          result[i] = -1;
          break;
        } else if (currentNumber < result[j]) {
          result[i] = result[j];
          break;
        }
      }
    }
  }

  return result;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));
