// 시간 초과
// function solution(number, k) {
//   const indexes = [];

//   if (number.length - k === 1) {
//     return String(Math.max(...number)).valueOf();
//   }

//   let array = number.slice(0, -(number.length - k - 1));
//   let index = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (number[i] > number[index]) {
//       index = i;
//     }

//     if (i === array.length - 1 && indexes.length < number.length - k) {
//       indexes.push(index);
//       i = indexes[indexes.length - 1];
//       index = indexes[indexes.length - 1] + 1;
//       array += number[array.length];
//     }

//     if (indexes.length === number.length - k) {
//       break;
//     }
//   }

//   let result = "";
//   indexes.forEach((index) => {
//     result += number[index];
//   });

//   return result;
// }

// 지피티
function solution(number, k) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    while (
      count < k &&
      stack.length > 0 &&
      stack[stack.length - 1] < number[i]
    ) {
      stack.pop();
      count++;
    }
    stack.push(number[i]);
  }

  // k개를 모두 제거하지 못한 경우, 뒤에서 제거
  while (count < k) {
    stack.pop();
    count++;
  }

  return stack.join("");
}

console.log(solution("92", 1));
// console.log(solution("1924", 2));
// console.log(solution("1231234", 3));
// console.log(solution("4177252841", 4));
console.log(solution("321232123", 2));
