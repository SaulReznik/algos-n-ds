const { edgesToAjacencyList, edges } = require("./edgesToAdjacencyList.js");

/**
 * @param {{ from: string, to: string, weight: number }} edges
 * @param {number} n - number of vertecies
 * @param {string} start - starting vertex
 * @return {number}
 */

class Node {
  constructor(val, prio) {
    this.val = val;
    this.prio = prio;
  }
}

class MinHeap {
  constructor() {
    this.heap = [0];
  }

  bubbleUp(index = this.heap.length - 1) {
    const parentIndex = Math.floor(index / 2)

    if (!parentIndex || this.heap[index].prio >= this.heap[parentIndex].prio) return;

    let temp = this.heap[parentIndex];
    this.heap[parentIndex] = this.heap[index];
    this.heap[index] = temp;

    this.bubbleUp(parentIndex);
  }

  sinkDown(index = 1) {
    const left = index * 2;
    const right = index * 2 + 1;
    let swap;

    if (this.heap[left] && this.heap[right] && this.heap[right].prio < this.heap[left].prio && this.heap[right].prio < this.heap[index].prio) {
      swap = right;
    }

    if (!swap && this.heap[left] && this.heap[left].prio < this.heap[index].prio) {
      swap = left;
    }

    if (!swap) return;
    let temp = this.heap[swap];
    this.heap[swap] = this.heap[index];
    this.heap[index] = temp;
    this.sinkDown(swap);
  }

  insert(val, prio) {
    const node = new Node(val, prio);
    this.heap.push(node);
    if (this.heap.length < 3) return;
    this.bubbleUp();
  };

  remove() {
    if (this.heap.length <= 1) return;
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const removed = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.sinkDown();
    return removed;
  }
}

const dijkstra = (edges, start) => {
  const adj = edgesToAjacencyList(edges);
  const distances = {};
  const minHeap = new MinHeap();
  minHeap.insert(start, 0)

  while (minHeap.heap.length > 1) {
    const currNode = minHeap.remove();
    if (distances.hasOwnProperty(currNode.val)) {
      continue;
    }

    distances[currNode.val] = currNode.prio
    for (let i = 0; i < adj[currNode.val].length; i++) {
      const [val, dis] = adj[currNode.val][i];
      if (distances.hasOwnProperty(val)) continue;
      minHeap.insert(val, dis + currNode.prio);
    };

  };

  return distances;
};

console.log(dijkstra(edges, 'A'))

