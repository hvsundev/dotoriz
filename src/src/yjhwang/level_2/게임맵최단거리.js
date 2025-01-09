function solution(maps) {
    // 가장 마지막 position
    const x = maps.length - 1;
    const y = maps[0].length - 1;
  
    // bfs로 탐색
    let queue = [[0, 0, 1]];
  
    while (!!queue.length) {
      let [curX, curY, count] = queue.shift();
  
      // 현재 위치 방문
      maps[curX][curY] = 0;
  
      // 인접 위치 담기
      if (curX - 1 >= 0 && maps[curX - 1][curY] !== 0) {
        queue.push([curX - 1, curY, count + 1]);
      }
  
      if (curX + 1 <= x && maps[curX + 1][curY] !== 0) {
        queue.push([curX + 1, curY, count + 1]);
      }
  
      if (curY - 1 >= 0 && maps[curX][curY - 1] !== 0) {
        queue.push([curX, curY - 1, count + 1]);
      }
  
      if (curY + 1 <= y && maps[curX][curY + 1] !== 0) {
        queue.push([curX, curY + 1, count + 1]);
      }
  
      // 최종 체크
      if (!queue.length) {
        if (curX >= x && curY >= y) {
          return count;
        } else {
          return -1;
        }
      }
    }
  }