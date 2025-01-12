function solution(numbers) {
  numbers.sort((a, b) => {
    // 숫자를 만들때 3번 반복
    // 예를들어 6과 10이면 666, 101010 으로 리턴하고 문자열로 비교
    // 위와 같은 방식으로 하는 이유는 3과 30을 비교할 때 어떤 것이 큰 값인지 알아내기 위해서 사용한다고 함 (이런 방식이 있는지 몰랐음)
    const num1 = String(a).repeat(3, 0);
    const num2 = String(b).repeat(3, 0);

    // num1(101010) > num2(666) 비교하면 문자열 비교로 인해 전체 숫자크기가 아닌 각 자리수 비교를 하게됨
    // num1가 더 크면 자리를 변경하지 않는다
    if (num1 > num2) return -1;
  });

  // numbers 모든 값이 0이면 "0" 하나를 리턴
  if (numbers.every((num) => !num)) return "0";

  // 정렬된 숫자를 문자열로 치환하여 리턴
  return numbers.join("");
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
