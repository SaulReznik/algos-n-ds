function countUniqueValues(arr) {
  let count = 0;
  let highest = -Infinity;
  arr.forEach(num => {
    if (num > highest) {
      count++;
      highest = num;
    }
  });

  return count;
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5]));
