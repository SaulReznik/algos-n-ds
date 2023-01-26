function sameFrequency(first, second) {
  const firstSum = `${first}`.split('').reduce((a, b) => +a + +b, 0);
  const secondSum = `${second}`.split('').reduce((a, b) => +a + +b, 0);

  return firstSum === secondSum
}

console.log(sameFrequency(34, 14));
