class PriorityQueue {
  constructor() {
      this.values = [];
  }

  enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
  }
  
  dequeue() {
      return this.values.shift();
  }

  sort() {
      this.values.sort((a,b) => a.priority - b.priority);
  }

  generateInitialQueue(list, from) {
      this.values = [];

      for (let v in list) {
          this.enqueue(v, v === from ? 0 : Infinity);
      }
      this.sort();
  }
}

class WeightedGraph {
  constructor() {
      this.adjacencyList = {};
  }

  addVertex(value) {
      if (!this.adjacencyList[value]) {
          this.adjacencyList[value] = [];
      }
  }

  addEdge(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1].push({node: vertex2, weight});
      this.adjacencyList[vertex2].push({node: vertex1, weight});
  }

  generateInitialDistances(from) {
      const distances = {}

      for (let v in this.adjacencyList) {
          distances[v] = v === from ? 0 : Infinity;
      }
  
      return distances;
  }

  generateInitialPrevious() {
      const previous = {};

      for (let v in this.adjacencyList) {
          previous[v] = null;
      }

      return previous;
  }

  djikstra(from, to) {
      const list = this.adjacencyList;
      if(!list[from] || !list[to]) return null;

      const result = [];
      const distances = this.generateInitialDistances(from);
      const previous = this.generateInitialPrevious();
      const queue = new PriorityQueue();
      queue.generateInitialQueue(list, from);

      while(queue.values.length) {
          let vertex = queue.dequeue().val;
          if (vertex === to) {
              while(previous[vertex]) {
                  result.push(vertex);
                  vertex = previous[vertex]; 
              }
              break;
          };

          const neighbours = this.adjacencyList[vertex];

          neighbours.forEach(neighbour => {
              const currDistance = distances[vertex] + neighbour.weight;
              const currNode = neighbour.node;

              if (currDistance < distances[currNode]) {
                  distances[currNode] = currDistance;
                  previous[currNode] = vertex;
                  queue.enqueue(currNode, currDistance);
              }
          });
      }

      return [from, ...result.reverse()];
  }
}

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'F', 1);
graph.addEdge('D', 'E', 3);
graph.addEdge('F', 'E', 1);

console.log(graph.djikstra('A', 'E'));
