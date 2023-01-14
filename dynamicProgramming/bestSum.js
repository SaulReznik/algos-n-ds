// You are given a target number and an array of coins
// You should return the shortest combination of coins that in sum will get a target sum

const bestSum = (targetSum, numbers, memo = {}) => {
  if (memo.hasOwnProperty(targetSum)) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const reminder = targetSum - num;
    const reminderCombination = bestSum(reminder, numbers, memo);

    if (reminderCombination !== null) {
      const combination = [...reminderCombination, num];

      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]
console.log('----------------');
const bestSumTable = (targetSum, coins) => {
  const table = new Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {

    if (table[i]) {
      for (let coin of coins) {
        const newSum = [...table[i], coin];
        const oldSum = table[i + coin]
        if (!oldSum || newSum.length < oldSum.length) {
          table[i + coin] = newSum
        }
      }
    }
  }

  return table[targetSum];
}

console.log(bestSumTable(7, [5, 3, 4, 7])) // [7]
console.log(bestSumTable(8, [2, 3, 5])) // [3, 5]
console.log(bestSumTable(8, [1, 4, 5])) // [4, 4]
console.log(bestSumTable(100, [1, 2, 5, 25])) // [25, 25, 25, 25]
