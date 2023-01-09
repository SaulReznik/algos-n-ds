// You are given a target number and an array of coins
// You should see if it's possible to get a target sum with the givven coins

const canSum = (targetSum, numbers, memo = {}) => {
  if (memo.hasOwnProperty(targetSum)) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
console.log('--------');
const canSumTable = (targetSum, coins) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    const cell = table[i];

    if (cell) {
      for (let coin of coins) {
        if (i + coin <= targetSum) {
          table[i + coin] = true;
        }
      }
    }
  }

  return table[targetSum];
}

console.log(canSumTable(7, [2, 3]));
console.log(canSumTable(7, [5, 3, 4, 7]));
console.log(canSumTable(7, [2, 4]));
console.log(canSumTable(8, [2, 3, 5]));
console.log(canSumTable(300, [7, 14]));
