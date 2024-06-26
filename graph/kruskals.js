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

class UnionFind {
  constructor(n) {
    this.parents = {};
    this.heights = {};

    for (let i = 1; i <= n; i++) {
      this.parents[i] = i;
      this.heights[i] = 1;
    }
  }

  findRoot(n) {
    let parent = this.parents[n];

    while(parent !== this.parents[parent]) {
      this.parents[parent] = this.parents[this.parents[parent]];
      parent = this.parents[parent];
    }

    return parent;
  }

  unionEdges([a, b]) {
    const aRoot = this.findRoot(a);
    const bRoot = this.findRoot(b);

    if (aRoot === bRoot) return false;

    if (this.heights[aRoot] > this.heights[bRoot]) {
      this.parents[bRoot] = aRoot;
    } else {
      this.parents[aRoot] = bRoot;
      this.heights[bRoot]++
    }
  }
};

const kruskals = (edges, n) => {
  const minHeap = new MinHeap();

  for (let i = 0; i < edges.length; i++) {
    const [ from, to, weight ] = edges[i];
    minHeap.insert([from, to], weight);
  }

  const unionFind = new UnionFind(n);
  const mst = [];

  while (mst.length > n - 1) {
    const { val: currEdge } = minHeap.remove();

    if (unionFind.unionEdges(currEdge)) {
      mst.push(currEdge);
    };
  }

  return mst;
};


