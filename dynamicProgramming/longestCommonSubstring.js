const s1 = ['a', 'd', 'c', 'b'];
const s2 = ['a', 'b', 'c'];

const recursiveLCS = (s1, s2) => {

  const helper = (s1, s2, p1, p2) => {
    if (p1 >= s1.length || p2 >= s2.length) return 0;

    if (s1[p1] === s2[p2]) return 1 + helper(s1, s2, p1 + 1, p2 + 1);

    return Math.max(helper(s1, s2, p1 + 1, p2), helper(s1, s2, p1, p2 + 1))
  };

  return helper(s1, s2, 0, 0);
}

// console.log(recursiveLCS(s1,s2));

const memoizedRecusiveLCS = (s1, s2) => {
  const table = [];

  for (let i = 0; i < s1.length; i++) {
    table.push(new Array(s2.length).fill(-1));
  };

  const helper = (s1, s2, p1, p2) => {
    if (p1 >= s1.length || p2 >= s2.length) return 0;
    if (table[p1][p2] !== -1) return table[p1][p2];

    if (s1[p1] === s2[p2]) {
      table[p1][p2] = 1 + helper(s1, s2, p1 + 1, p2 + 1);
    } else {
      table[p1][p2] = Math.max(helper(s1, s2, p1 + 1, p2), helper(s1, s2, p1, p2 + 1))
    };

    console.table(table);
    return table[p1][p2];
  };

  return helper(s1, s2, 0, 0);
}

// console.log(memoizedRecusiveLCS(s1, s2));

const tabulationLCS = (s1, s2) => {
  const table = [];

  for (let i = 0; i <= s1.length; i++) {
    table.push(new Array(s2.length + 1).fill(0));
  };

  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        table[i][j] = 1 + table[i - 1][j - 1];                      // Include current character
      } else {
        table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);   // Skip curret character
      }
    }
  }

  console.table(table);
  return table[s1.length][s2.length]
};

console.log(tabulationLCS(s1, s2));

const optimizedTabulationLCS = (s1, s2) => {
  let row = [];

  for (let i = 0; i <= s2.length; i++) {
    row.push(0);
  };

  for (let i = 1; i <= s1.length; i++) {
    const newRow = [0];

    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        newRow.push(1 + row[j - 1]);                    // Include current character
      } else {
        newRow.push(Math.max(newRow[j - 1], row[j]));   // Skip curret character
      }
    }

    row = newRow;
  }

  console.log(row);
  return row[s2.length]
}

console.log(optimizedTabulationLCS(s1, s2));
