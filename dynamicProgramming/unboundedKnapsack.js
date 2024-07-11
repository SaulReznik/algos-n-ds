const profits = [4, 4, 7, 1];
const weights = [5, 2, 3, 1];

const recursive = (profits, weights, capacity) => {

  const helper = (i, profits, weights, capacity) => {
    if (i >= profits.length) return 0;

    let maxProfit = helper(i + 1, profits, weights, capacity);
    const currCapacity = capacity - weights[i];

    if (currCapacity >= 0) {
      const currProfit = profits[i] + helper(i, profits, weights, currCapacity);
      maxProfit = Math.max(maxProfit, currProfit);
    };

    return maxProfit;
  }

  return helper(0, profits, weights, capacity);
}

console.log(recursive(profits, weights, 8));

const memoizedRecursive = (profits, weights, capacity) => {
  const memo = [];

  for (let i = 0; i < profits.length; i++) {
    memo.push(new Array(capacity + 1).fill(-1));
  };

  const helper = (i, profits, weights, capacity) => {
    if (i >= profits.length) return 0;
    if (memo[i][capacity] !== -1) return memo[i][capacity];

    memo[i][capacity] = helper(i + 1, profits, weights, capacity);
    const currCapacity = capacity - weights[i];

    if (currCapacity >= 0) {
      const currProfit = profits[i] + helper(i, profits, weights, currCapacity);
      memo[i][capacity] = Math.max(memo[i][capacity], currProfit);
    }

    return memo[i][capacity];
  };

  return helper(0, profits, weights, capacity);
}

console.log(memoizedRecursive(profits, weights, 8));
