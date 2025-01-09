function solution(numbers) {
    const copyArr = [...numbers]
    const resultArr = []
    
    let result
    for (let i=0; i<copyArr.length; i++) {
        result = -1
        if (numbers[i-1] < copyArr[i]) result = copyArr[i]
        copyArr.shift()
    }
    resultArr.push(result)
    
    return resultArr
}