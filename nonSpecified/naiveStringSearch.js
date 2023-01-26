function naiveStringSearch(str, target) {
  let count = 0;

  upper: for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (str[i + j] !== target[j]) continue upper;
    }
    count++;
  }

  return count;
}

console.log(naiveStringSearch('zomgegomgo', 'omg'));
