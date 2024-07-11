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

console.log(recursiveKnapsack(profits, weights, 80));


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

console.log(memoizedRecursiveKnapsack(profits, weights, 800));
