class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (this.head === null || this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      this.size = 1;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }

    const remove = this.head;
    this.head = this.head.next;
    this.size -= 1;
    return remove.data;
  }
}

function solution(maps) {
  // 가장 마지막 position
  const x = maps.length - 1;
  const y = maps[0].length - 1;
  const dx = [-1, 1, 0, 0]; // 서, 동, 북, 남
  const dy = [0, 0, -1, 1]; // 서, 동, 북, 남

  // bfs로 탐색
  const queue = new Queue();
  queue.enqueue([0, 0, 1]);

  while (!!queue.size) {
    let [curX, curY, count] = queue.dequeue();

    if (curX === x && curY === y) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const moveX = curX + dx[i];
      const moveY = curY + dy[i];

      if (moveX < 0 || moveX > x || moveY < 0 || moveY > y) {
        continue;
      }

      if (maps[moveX][moveY] === 0) {
        continue;
      }

      // 현재 위치 방문
      maps[moveX][moveY] = 0;
      // 인접 위치 담기
      queue.enqueue([moveX, moveY, count + 1]);
    }
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
