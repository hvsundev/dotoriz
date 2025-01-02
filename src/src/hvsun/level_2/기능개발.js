function solution(progresses, speeds) {
    let answer = []
  
    const getCompletedTaskCount = () => {
      let count = 0
      while (progresses.length > 0 && progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        count++;
      }
      return count;
    }
  
    while (progresses.length > 0) {
      for (let i = 0; i < progresses.length; i++) {
        progresses[i] += speeds[i]
      }
  
      if (progresses[0] >= 100) {
        const count  = getCompletedTaskCount()
        answer.push(count ? count : 1)
      }
    }
  
    return answer;
  }