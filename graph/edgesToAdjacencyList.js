const edges = [
  {
    from: 'A',
    to: 'B',
    weight: 10,
  },
  {
    from: 'A',
    to: 'C',
    weight: 3,
  },
  {
    from: 'C',
    to: 'B',
    weight: 4,
  },
  {
    from: 'B',
    to: 'D',
    weight: 2,
  },
  {
    from: 'C',
    to: 'D',
    weight: 8,
  },
  {
    from: 'C',
    to: 'E',
    weight: 2,
  },
  {
    from: 'D',
    to: 'E',
    weight: 5,
  }
]

// single directional, weighted
const edgesToAjacencyList = edges => {
  const adjacencyList = {};

  edges.forEach(({ from, to, weight }) => {
    const currDirection = [to, weight];
    if (!adjacencyList.hasOwnProperty(to)) {
      adjacencyList[to] = [];
    }
    if (!adjacencyList.hasOwnProperty(from)) {
      adjacencyList[from] = [currDirection];
    } else {
      adjacencyList[from].push(currDirection)
    }
  });

  return adjacencyList;
};

// birectional directional, weighted
const bidirectionalEdgesToAdjacencyList = edges => {
  const adjacencyList = {};

  edges.forEach(({ from, to, weight }) => {
    if (!adjacencyList.hasOwnProperty(to)) {
      adjacencyList[to] = [[from, weight]];
    } else {
      adjacencyList[to].push([from, weight])
    }

    if (!adjacencyList.hasOwnProperty(from)) {
      adjacencyList[from] = [[to, weight]];
    } else {
      adjacencyList[from].push([to, weight])
    }
  });

  return adjacencyList;
}

// console.log(edgesToAjacencyList(edges));

module.exports = {
  bidirectionalEdgesToAdjacencyList,
  edgesToAjacencyList,
  edges
}
