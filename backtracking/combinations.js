//Find distinct combinations from range n that have a length of k

const helper = (i, combinations, curr, n, k) => {
  if (curr.length === k) {
    combinations.push([...curr]);
    return;
  }

  if (i > n) return;

  curr.push(i);
  helper(i + 1, combinations, curr, n, k);
  curr.pop();
  helper(i + 1, combinations, curr, n, k);
}

const optimizedHelper = (i, combinations, curr, n, k) => {
  if (curr.length === k) {
    combinations.push([...curr]);
    return;
  }

  if (i > n) return;

  for (let j = i; j <= n; j++) {
    curr.push(j);
    optimizedHelper(j + 1, combinations, curr, n, k);
    curr.pop();
  }
};

const combinations = (n, k) => {
  const result = [];
  const curr = [];
  optimizedHelper(1, result, curr, n, k);
  return result;
};

console.log(combinations(5, 3));
