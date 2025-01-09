function solution(number, k) {
    const result = [];
    for (let i=0; i<number.length; i++) {
        // 1. 배열의 마지막 숫자가 현재 넣으려는 숫자보다 큰 지 검사
        // 2. 시도한 횟수가 제거할 수의 개수인 k를 초과하면 안됨
        while (result.length > 0 && result[result.length - 1] < number[i] && k > 0) {
            k--;
            result.pop();
        }
        result.push(number[i]);
    }
    result.splice(number.length - k, k);
    
    return result.join("");
}