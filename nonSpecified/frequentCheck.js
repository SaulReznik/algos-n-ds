function freq(arr, sqr) {
  const sqrObj = {};

  if (arr.length !== sqr.length) return false;
  arr.forEach(num => sqrObj[num ** 2] = ++sqrObj[num ** 2] || 1);

  for (let i = 0; i < sqr.length; i++) {
    if (!~(--sqrObj[sqr[i]])) return false;
  }

  return true;
}

console.log(freq([1, 2, 3, 2, 5], [1, 4, 9, 4, 25]));
