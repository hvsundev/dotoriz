class MinHeap {
  constructor() {
    this.heap = [null];
  }

  hasNum(value) {
    return typeof value === "number";
  }

  size() {
    return this.heap.length - 1;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIndex = Math.floor(index / 2);

    while (
      this.heap[parentIndex] !== null &&
      this.hasNum(this.heap[parentIndex]) &&
      this.heap[index] < this.heap[parentIndex]
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor(index / 2);
    }
  }

  remove() {
    if (this.heap.length === 1) {
      return null;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const value = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleDown() {
    let rootIndex = 1;
    let leftIndex = rootIndex * 2;
    let rightIndex = rootIndex * 2 + 1;

    while (
      (this.hasNum(this.heap[leftIndex]) &&
        this.heap[rootIndex] > this.heap[leftIndex]) ||
      (this.hasNum(this.heap[rightIndex]) &&
        this.heap[rootIndex] > this.heap[rightIndex])
    ) {
      let smallerIndex = leftIndex;

      if (
        this.hasNum(this.heap[rightIndex]) &&
        this.heap[smallerIndex] > this.heap[rightIndex]
      ) {
        smallerIndex = rightIndex;
      }

      this.swap(rootIndex, smallerIndex);
      rootIndex = smallerIndex;
      leftIndex = rootIndex * 2;
      rightIndex = rootIndex * 2 + 1;
    }
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (let i = 0; i < scoville.length; i++) {
    minHeap.add(scoville[i]);
  }

  let firstMin = minHeap.remove();
  let count = 0;
  while (firstMin < K) {
    let secondMin = minHeap.remove();

    if (secondMin === null) {
      return -1;
    }

    minHeap.add(firstMin + secondMin * 2);
    firstMin = minHeap.remove();
    count += 1;
  }

  return count;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
