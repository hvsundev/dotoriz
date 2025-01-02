class Link {
  constructor(data = null) {
    this.data = data;
    this.tail = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.list = null;
  }

  enQueue(data) {
    let tail = new Link(data);
    let list = this.list;

    if (!list) {
      this.list = tail;
      this.head = tail;
    }

    this.head.tail = tail;
    this.head = tail;
  }

  deQueue() {
    let list = this.list;

    if (!list) return null;

    this.list = list.tail;

    return list.data;
  }

  count() {
    let list = this.list;
    let count = 1;

    if (!list) return count;

    while (list.tail) {
      count++;
      list = list.tail;
    }
    return count;
  }
}

function biggerThanNext(prev, next) {
  return prev < next ? false : true;
}

function solution(progresses, speeds) {
  const queue = new Queue();
  for (let i = 0; i < progresses.length; i++) {
    const term = Math.ceil((100 - progresses[i]) / speeds[i]);
    queue.enQueue(term);
  }

  const n = queue.count();
  const result = [1];
  let prev = queue.deQueue();
  for (let i = 1; i < n; i++) {
    let next = queue.deQueue();
    if (biggerThanNext(prev, next)) {
      result[result.length - 1] += 1;
    } else {
      result.push(1);
      prev = next;
    }
  }
  return result;
}
