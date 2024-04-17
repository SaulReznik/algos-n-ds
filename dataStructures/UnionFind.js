class UnionFind {
  constructor(n) {
    this.parents = {};
    this.heights = {};

    for (let i = 0; i <= n; i++) {
      this.parents[i] = i;
      this.heights[i] = 1;
    }
  }

  findRoot(node) {
    let currParent = this.parents[node];

    while(currParent !== this.parents[currParent]) {
      this.parents[currParent] = this.parents[this.parents[currParent]];
      currParent = this.parents[currParent];
    }

    return currParent;
  }

  unionEdges([edgeA, edgeB]) {
    const edgeARoot = this.findRoot(edgeA);
    const edgeBRoot = this.findRoot(edgeB);

    if (edgeARoot === edgeBRoot) return null;

    if (this.heights[edgeARoot] > this.heights[edgeBRoot]) {
      this.parents[edgeBRoot] = edgeARoot;
    } else if (this.heights[edgeARoot] < this.heights[edgeBRoot]) {
      this.parents[edgeARoot] = edgeBRoot;
    } else {
      this.parents[edgeBRoot] = edgeARoot;
      this.heights[edgeARoot]++;
    }
  }
}
