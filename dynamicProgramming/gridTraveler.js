// There's a M x N table and a travler that starts at the left top point of the table. 
// The travaler can go only right or bottom.
// Count the ways that the travaler can reach the right bottom point

const gridTravelerMemo = (m, n, memo = {}) => {
  const key = `${m},${n}`;
  if (memo.hasOwnProperty(key)) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
  return memo[key];
};

console.log(gridTravelerMemo(1, 1)); // 1
console.log(gridTravelerMemo(2, 3)); // 3
console.log(gridTravelerMemo(3, 2)); // 3
console.log(gridTravelerMemo(3, 3)); // 6
console.log(gridTravelerMemo(18, 18)); // 2333606220


const gridTravelerTable = (m, n) => {
  const table = Array(m + 1).fill()
    .map(() => Array(n + 1).fill(0));

  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const curr = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += curr;
      if (i + 1 <= m) table[i + 1][j] += curr;
    }
  }

  return table[m][n];
}

console.log(gridTravelerTable(1, 1)); // 1
console.log(gridTravelerTable(2, 3)); // 3
console.log(gridTravelerTable(3, 2)); // 3
console.log(gridTravelerTable(3, 3)); // 6
console.log(gridTravelerTable(18, 18)); // 2333606220
