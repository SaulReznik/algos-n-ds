const denominations = [1, 5, 10, 25];

const coinChange = (coins, targetSum) => {
  const table = new Array(targetSum + 1).fill(0);
  table[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i <= targetSum; i++) {
      table[i] += table[i - coin];
    }
  }
  return table[targetSum];
}

console.log(coinChange(denominations, 1)) // 1
console.log(coinChange(denominations, 2)) // 1
console.log(coinChange(denominations, 5)) // 2
console.log(coinChange(denominations, 10)) // 4
console.log(coinChange(denominations, 25)) // 13
console.log(coinChange(denominations, 45)) // 39
console.log(coinChange(denominations, 100)) // 242
console.log(coinChange(denominations, 145)) // 622
console.log(coinChange(denominations, 1451)) // 425663
console.log(coinChange(denominations, 14511)) // 409222339
