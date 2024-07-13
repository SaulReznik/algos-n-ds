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

// console.log(recursive(profits, weights, 8));

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

// console.log(memoizedRecursive(profits, weights, 8));

const tabulation = (profits, weights, capacity) => {
  const table = [];

  for (let i = 0; i < profits.length; i++) {
    table.push(new Array(capacity + 1).fill(0))
  };

  for (let i = 0; i <= capacity; i++) {
    if (weights[0] <= i) {
      table[0][i] = profits[0]
    }
  }


  for (let i = 1; i < table.length; i++) {
    for (let j = 0; j <= capacity; j++) {
      const skipProfit = table[i - 1][j];

      if (weights[i] <= j) {
        const includeProfit = table[i][j - weights[i]] + profits[i];
        table[i][j] = Math.max(skipProfit, includeProfit);
      } else {
        table[i][j] = skipProfit;
      }
    }
  }

  console.table(table);
  return table[profits.length - 1][capacity];
}

// console.log(tabulation(profits, weights, 8));

const optimizedTabulation = (profits, weights, capacity) => {
  let table = [];

  for (let i = 0; i <= capacity; i++) {
    if (weights[0] <= i) {
      table.push(profits[0]);
    } else {
      table.push(0)
    }
  };

  for (let i = 1; i < profits.length; i++) {
    const newRow = [];
    for (let j = 0; j <= capacity; j++) {
      const skipProfit = table[j];
      if (weights[i] <= j) {
        const includeProfit = newRow[j - weights[i]] + profits[i];
        newRow[j] = Math.max(skipProfit, includeProfit);
      } else {
        newRow.push(skipProfit);
      }
    }
    table = newRow;
  };
  console.table(table);
  return table[capacity];
};

console.log(optimizedTabulation(profits, weights, 8));
