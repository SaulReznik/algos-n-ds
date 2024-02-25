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

const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

const getShortestPathLength = matrix => {
  const rowLength = matrix.length;
  const columnLength = matrix[0].length;

  const queue = [[0, 0]];
  const visits = new Set();
  visits.add('00');

  let length = 0;

  while (queue.length) { // If the queue is empty, it means that we can't go further or the traverse is done
    for (let i = 0; i < queue.length; i++) { // Going through every element on the layer to see what possible ways we have for each element on th layer
      const [currRow, currCol] = queue.shift(); // Pop from queue the next valid position
      if (currRow === rowLength - 1 && currCol === columnLength - 1) return length; // Check if we reached the end of the matrix

      for (let j = 0; j < directions.length; j++) { // Going throgh every possible direction to see where we can go further
        const [dirRow, dirCol] = directions[j];
        if (
          Math.min(currRow + dirRow, currCol + dirCol) < 0 || currRow + dirRow >= rowLength || currCol + dirCol >= columnLength ||
          visits.has(`${currRow + dirRow}${currCol + dirCol}`) ||
          matrix[currRow + dirRow][currCol + dirCol] === 1
        ) continue;
        queue.push([currRow + dirRow, currCol + dirCol]); // If the next possiotion is valid, add it to the queeu
        visits.add(`${currRow + dirRow}${currCol + dirCol}`);
      }

    }
    length++;
  };
}

console.log(getShortestPathLength(matrix));
