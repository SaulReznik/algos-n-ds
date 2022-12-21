const getDigit = (num, place) => {
  if (!place) return Math.abs(num % 10);
  return getDigit(Math.floor(Math.abs(num / 10)), place - 1);
};

const countDigits = num => {
  if (Math.abs(num) < 10) return 1;
  return 1 + countDigits(Math.floor(num / 10));
}

const getMaxDigit = arr => arr.reduce((acc, num) => Math.max(countDigits(num), acc), 0);

const radixSort = arr => {
  const maxDigit = getMaxDigit(arr);

  for (let i = 0; i <= maxDigit; i++) {
    // This is not working
    // const buckets = Array(9).fill([]);
    const buckets = Array.from({ length: 10 }, () => []);
    arr.forEach(num => buckets[getDigit(num, i)].push(num));
    arr = buckets.reduce((acc, bucket) => [...acc, ...bucket], [])
  }

  return arr;
}

console.log(radixSort([11111, 2222, 333, 44, 5]));
