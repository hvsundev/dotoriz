const PRIORITY_LEVEL = {
    left: [1, 4, 7],
    right: [3, 6, 9],
    center: [2, 5, 8, 0],
  }
  
  const graph = new Map()
  function addEdges(node, neighbors) {
    graph.set(node, new Set(neighbors))
  }
  
  function DFS(start, target, visited = new Set(), distance = 0) {
    if (start === target) return distance
  
    visited.add(start)
    let minDistance = Infinity
  
    // 인접한 노드를 DFS로 탐색
    for (const neighbor of graph.get(start)) {
      if (!visited.has(neighbor)) {
        const dist = DFS(neighbor, target, visited, distance + 1)
        if (dist < minDistance) minDistance = dist // 최소 거리 갱신
      }
    }
  
    visited.delete(start)
    return minDistance
  }
  
  const solution = (numbers, hand) => {
    // Map(10) {
    //   1 => Set(3) { 2, 4, 5 },
    //   2 => Set(4) { 1, 3, 5, 4 },
    //   3 => Set(3) { 2, 6, 5 },
    //   4 => Set(4) { 1, 5, 7, 2 },
    //   5 => Set(9) { 2, 3, 4, 6, 8, 1, 7, 9, 0 },
    //   6 => Set(4) { 3, 5, 9, 2 },
    //   7 => Set(4) { 4, 8, 5, 0 },
    //   8 => Set(6) { 4, 5, 6, 7, 9, 0 },
    //   9 => Set(4) { 6, 8, 5, 0 },
    //   0 => Set(3) { 7, 8, 9 }
    // }
    addEdges(1, [2, 4])
    addEdges(2, [1, 3, 5])
    addEdges(3, [2, 6])
    addEdges(4, [1, 5, 7])
    addEdges(5, [2, 4, 6, 8])
    addEdges(6, [3, 5, 9])
    addEdges(7, [4, 8, '*'])
    addEdges(8, [5, 7, 9, 0])
    addEdges(9, [6, 8, '#'])
    addEdges(0, [8, '*', '#'])
    addEdges('*', [7, 0])
    addEdges('#', [9, 0])
  
    const lastPushedKey = {
      right: '*',
      left: '#',
    }
  
    const pushKey = (direction, pushedKey) => {
      if (direction === 'right') {
        result.push('R')
        lastPushedKey.right = pushedKey
      } else {
        result.push('L')
        lastPushedKey.left = pushedKey
      }
    }
  
    const result = []
    numbers.forEach((pushedKey) => {
      if (PRIORITY_LEVEL['right'].includes(pushedKey)) {
        pushKey('right', pushedKey)
      } else if (PRIORITY_LEVEL['left'].includes(pushedKey)) {
        pushKey('left', pushedKey)
      } else if (PRIORITY_LEVEL['center'].includes(pushedKey)) {
        const leftHandDistance = DFS(lastPushedKey.left, pushedKey)
        const rightHandDistance = DFS(lastPushedKey.right, pushedKey)
  
        if (leftHandDistance > rightHandDistance) {
          pushKey('right', pushedKey)
        } else if (leftHandDistance < rightHandDistance) {
          pushKey('left', pushedKey)
        } else if (leftHandDistance === rightHandDistance) {
          hand === 'right' ? pushKey('right', pushedKey) : pushKey('left', pushedKey)
        }
      }
    })
  
    return result.join('')
  }
  