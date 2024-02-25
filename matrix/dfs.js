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

// O(4^n*m)
const getUniqueWays = (matrix, c = 0, r = 0, visits = new Set()) => {
  const rowLength = matrix[0].length;
  const columnLength = matrix.length;
  const currLocation = `${r}${c}`;

  if (
      Math.min(c, r) < 0 || c === columnLength || r === rowLength   // If the location is out of bounds
      || matrix[r][c] === 1                                         // If the location is a wall, that we can't pass
      || visits.has(currLocation)                                   // If the location is already visited
    ) 
    return 0;
  if (c === columnLength - 1 && r === rowLength - 1) return 1;      // If we reached the end of the matrix

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
