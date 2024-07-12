const profits = [4, 4, 7, 1];
const weights = [5, 2, 3, 1];

const recursiveKnapsack = (profits, weights, capacity) => {
    const helper = (i, profits, weights, capacity) => {
        if (i >= profits.length) return 0;

        let maxProfit = helper(i + 1, profits, weights, capacity);
        let newCapacity = capacity - weights[i];

        if (newCapacity >= 0) {
            let currProfit = profits[i] + helper(i + 1, profits, weights, newCapacity);
            maxProfit = Math.max(maxProfit, currProfit);
        };

        return maxProfit;
    };

    return helper(0, profits, weights, capacity);
};

// console.log(recursiveKnapsack(profits, weights, 80));


const memoizedRecursiveKnapsack = (profits, weights, capacity) => {
    const memo = [];

    for (let i = 0; i < profits.length; i++) {
        memo.push(new Array(capacity + 1).fill(-1))
    };

    const helper = (i, profits, weights, capacity) => {
        if (i >= profits.length) return 0;
        if (memo[i][capacity] !== -1) return memo[i][capacity];

        memo[i][capacity] = helper(i + 1, profits, weights, capacity);
        let newCapacity = capacity - weights[i];

        if (newCapacity >= 0) {
            let currProfit = profits[i] + helper(i + 1, profits, weights, newCapacity);
            memo[i][capacity] = Math.max(memo[i][capacity], currProfit);
        };

        return memo[i][capacity];
    };

    const result = helper(0, profits, weights, capacity);
    console.log(memo);
    return result;
}

// console.log(memoizedRecursiveKnapsack(profits, weights, 800));

const tabulation = (profits, weights, capacity) => {
    const table = [];

    for (let i = 0; i < profits.length; i++) {
        table.push(new Array(capacity + 1).fill(0));
    };

    for (let i = 0; i <= capacity; i++) {
        if (weights[0] <= i) {
            table[0][i] = profits[0]
        }
    }

    for (let i = 1; i < table.length; i++) {
        for (let j = 0; j <= capacity; j++) {
            const skipCell = table[i - 1][j];
            if (weights[i] <= j) {
                const includeCell = table[i - 1][j - weights[i]];
                table[i][j] = Math.max(skipCell, includeCell + profits[i]);
            } else {
                table[i][j] = skipCell
            }
        }
    };

    console.table(table);
    return table[profits.length - 1][capacity];
};

console.log(tabulation(profits, weights, 8));

const optimizedTabulation = (profits, weights, capacity) => {
    const table = [];
    table.push(new Array(capacity + 1).fill(0));

    for (let i = 0; i <= capacity; i++) {
        if (weights[0] <= i) {
            table[0][i] = profits[0];
        }
    };

    for (let i = 1; i < profits.length; i++) {
        const newRow = [];

        for (let j = 0; j <= capacity; j++) {
            const skipCell = table[0][j];
            if (weights[i] <= j) {
                const includeCell = table[0][j - weights[i]];
                newRow.push(Math.max(skipCell, includeCell + profits[i]));
            } else {
                newRow.push(skipCell);
            }
        }

        table[0] = newRow;
    }

    console.table(table);
    return table[0][capacity];
}

console.log(optimizedTabulation(profits, weights, 8));
