class Graph {
  constructor() {
      this.adjacencyList = {};
  }

  addVertex(value) {
      if (!this.adjacencyList[value]) {
          this.adjacencyList[value] = [];
      }
  }

  addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;

      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
  }

  removeVertex(vertex) {
      if (this.adjacencyList[vertex]) return;

      delete this.adjacencyList[vertex];

      for (let key in this.adjacencyList) {
          this.adjacencyList[key] = this.adjacencyList[key].filter(v => v !== vertex);
      }
  }

  depthFirstRecursive(vertex) {
      if (!this.adjacencyList[vertex]) return null;
      const result = [];
      const visited = {};

      const traverse = (v) => {
          if (!v) return null;
          result.push(v);
          visited[v] = true;

          for (let i = 0; i < this.adjacencyList[v].length; i++) {
              const item = this.adjacencyList[v][i];

              if (!visited[item]) traverse(item);
          }
      }

      traverse(vertex);
      return result;
  }

  depthFirstIterative(start) {
      if (!this.adjacencyList[start]) return null;
      const result = [];
      const visited = {};
      const stack = [start];

      while(stack.length) {
          const vertex = stack.pop();
              result.push(vertex);
              console.log('stack', stack);
              this.adjacencyList[vertex].forEach(el => {
                  if (!visited[el]) {
                      visited[el] = true;
                      stack.push(el);   
                  }
              });
      }

      return result;
  }

  breadthFirstTraverse(start) {
      const result = [];
      const queue = [start];
      const visited = {};

      while(queue.length) {
          const vertex = queue.shift();
          if (visited[vertex]) continue;
          queue.push(...this.adjacencyList[vertex]);
          visited[vertex] = true;
          result.push(vertex);
      }

      return result;
  }
};

const cities = new Graph();

cities.addVertex('Tokyo');
cities.addVertex('New York');
cities.addVertex('Yerevan');

cities.addEdge('Tokyo', 'Yerevan');
cities.addEdge('Tokyo', 'New York');

// cities.removeEdge('Tokyo', 'Yerevan');
cities.removeVertex('Yerevan');

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.breadthFirstTraverse('A'));
