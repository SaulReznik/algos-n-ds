const { bidirectionalEdgesToAdjacencyList, edges } = require("./edgesToAdjacencyList.js");

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

const prims = (edges, start = 'A') => {
  const adj = bidirectionalEdgesToAdjacencyList(edges);

  const minHeap = new MinHeap();

  for (let i = 0; i < adj[start].length; i++) {
    const [nextNode, weight] = adj[start][i];
    minHeap.insert([start, nextNode], weight);
  }

  const mst = [];
  const visits = new Set();
  visits.add(start);

  while (minHeap.heap.length > 1) {
    const { val: [source, node] } = minHeap.remove();

    if (visits.has(node)) continue;

    visits.add(node);
    mst.push([source, node]);

    for (let i = 0; i < adj[node].length; i++) {
      const [nextNode, weight] = adj[node][i];

      if (visits.has(nextNode)) continue;
      minHeap.insert([node, nextNode], weight);
    }

  }

  return mst;
};

console.log(prims(edges));
