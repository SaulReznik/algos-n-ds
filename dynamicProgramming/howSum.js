// You are given a target number and an array of coins
// You should return the combination of coins that in sum will get a target sum

const howSum = (targetSum, numbers, memo = {}) => {
  if (memo.hasOwnProperty(targetSum)) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const reminder = targetSum - num;
    const reminderResult = howSum(reminder, numbers, memo);

    if (reminderResult) {
      memo[targetSum] = [...reminderResult, num];;
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
console.log('----------');
const howSumTable = (targetSum, coins) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    const combinations = table[i];

    if (combinations) {
      for (let coin of coins) {
        table[i + coin] = [...table[i], coin];
      }
    }
  }

  return table[targetSum];
}

console.log(howSumTable(7, [2, 3]));
console.log(howSumTable(7, [5, 3, 4]));
console.log(howSumTable(7, [2, 4]));
console.log(howSumTable(8, [2, 3, 5]));
console.log(howSumTable(300, [7, 14]));
