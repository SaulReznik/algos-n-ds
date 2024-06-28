const edges = [
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 6],
  [5, 6],
];

const edgesToAdjacencyList = (edges) => {
  const adj = {};

  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];

    if (adj.hasOwnProperty(from)) {
      adj[from].push(to);
    } else {
      adj[from] = [to];
    }

    if (!adj.hasOwnProperty(to)) {
      adj[to] = [];
    }
  }

  return adj;
};

const dfs = (node, adj, visits, top) => {
  if (visits.has(node)) return;
  visits.add(node);

  for (let i = 0; i < adj[node].length; i++) {
    dfs(adj[node][i], adj, visits, top);
  };

  top.push(node);
};

const topologicalSort = (edges, n) => {
  const adj = edgesToAdjacencyList(edges);

  const visits = new Set();
  const top = [];

  for (let i = 1; i <= n; i++) {
    dfs(i, adj, visits, top);
  };
  console.log(adj);
  return top.reverse();
};

console.log(topologicalSort(edges, 6));
