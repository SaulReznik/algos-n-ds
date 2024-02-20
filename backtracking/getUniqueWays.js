const matrix = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0]
];

const matrix1 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const getUniqueWays = (matrix, c = 0, r = 0, visits = new Set()) => {
  const rowLength = matrix[0].length;
  const columnLength = matrix.length;
  const currLocation = `${r}${c}`;

  if (Math.min(c, r) < 0 || c === columnLength || r === rowLength || matrix[r][c] === 1 || visits.has(currLocation)) return 0;
  if (c === columnLength - 1 && r === rowLength - 1) return 1;

  visits.add(currLocation);

  let count = 0;
  count += getUniqueWays(matrix, c + 1, r, visits);
  count += getUniqueWays(matrix, c - 1, r, visits);
  count += getUniqueWays(matrix, c, r + 1, visits);
  count += getUniqueWays(matrix, c, r - 1, visits);

  visits.delete(currLocation);
  return count;
};

console.log(getUniqueWays(matrix1));
