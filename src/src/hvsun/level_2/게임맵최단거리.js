function solution(maps) {
    const n = maps.length
    const m = maps[0].length
    const dx = [-1, 1, 0, 0] // 서, 동, 북, 남
    const dy = [0, 0, -1, 1] // 서, 동, 북, 남
    const arr = [[0, 0, 1]] // x, y, count
  
    while (arr.length > 0) {
      const [x, y, count] = arr.shift()
  
      // 게임 목표 지점에 도달했을 때
      if (x === n - 1 && y === m - 1) {
        return count
      }
  
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i]
        const ny = y + dy[i]
  
        // 게임 맵을 벗어났을 때
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
          continue
        }
        // 벽일 때
        if (maps[nx][ny] === 0) {
          continue
        }
        // 방문한 곳이면 무시
        if (maps[nx][ny] === '방문') {
          continue
        }
  
        maps[nx][ny] = '방문'
        arr.push([nx, ny, count + 1])
      }
    }
    return -1
  }
  