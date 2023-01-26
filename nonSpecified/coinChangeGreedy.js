const denominations = [1, 5, 10, 25];

const coinChangeGreedy = (coins, targetSum) => {
  let leftover = targetSum;
  const result = [];

  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i];

    while (leftover >= coin) {
      result.push(coin);
      leftover -= coin;
    }
  }

  return result;
}

console.log(coinChangeGreedy(denominations, 1)) // [1]
console.log(coinChangeGreedy(denominations, 2)) // [1, 1]
console.log(coinChangeGreedy(denominations, 5)) // [5]
console.log(coinChangeGreedy(denominations, 10)) // [10]
console.log(coinChangeGreedy(denominations, 25)) // [25]
console.log(coinChangeGreedy(denominations, 45)) // [25, 10, 10]
console.log(coinChangeGreedy(denominations, 100)) // [25, 25, 25, 25]
console.log(coinChangeGreedy(denominations, 145)) // [25, 25, 25, 25, 25, 10, 10]
console.log(coinChangeGreedy(denominations, 1451)) // too long to write :)
console.log(coinChangeGreedy(denominations, 14511)) // too long to write :)
