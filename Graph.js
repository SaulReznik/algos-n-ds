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
};

const cities = new Graph();

cities.addVertex('Tokyo');
cities.addVertex('New York');
cities.addVertex('Yerevan');

cities.addEdge('Tokyo', 'Yerevan');
cities.addEdge('Tokyo', 'New York');

// cities.removeEdge('Tokyo', 'Yerevan');
cities.removeVertex('Yerevan');

console.log(cities.adjacencyList);