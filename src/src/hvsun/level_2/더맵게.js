// 1트
// [1, 2, 3, 9, 10, 12], 7
function solution(scoville, K) {
    const heap = scoville.sort((a, b) => a - b)
  
    let count = 0;
    while (heap.length > 1 && heap[0] < K) {
      const first = heap.shift();
      const second = heap.shift();
  
      const newScoville = first + (second * 2);
      heap.push(newScoville);
      heap.sort((a, b) => a - b);
      count++;
    }
  
    return heap[0] >= K ? count : -1;
  }

// 2트
class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this._heapifyUp();
    }
  
    extractMin() {
      if (this.heap.length <= 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this._heapifyDown();
      return min;
    }
  
    _heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[index] >= this.heap[parentIndex]) break;
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      }
    }
  
    _heapifyDown() {
      let index = 0;
      const length = this.heap.length;
      while (index < length) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallest = index;
  
        if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
          smallest = leftChildIndex;
        }
        if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
          smallest = rightChildIndex;
        }
        if (smallest === index) break;
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      }
    }
  }
  
  function solution(scoville, K) {
    const heap = new MinHeap();
    for (let num of scoville) {
      heap.insert(num);
    }
  
    let count = 0;
    while (heap.heap.length > 1 && heap.heap[0] < K) {
      const first = heap.extractMin();
      const second = heap.extractMin();
      const newScoville = first + (second * 2);
      heap.insert(newScoville);
      count++;
    }
  
    return heap.heap[0] >= K ? count : -1;
  }