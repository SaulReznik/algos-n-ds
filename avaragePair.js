function averagePair(arr, target) {
  if (arr.length < 2) return false;
  let start = 0;
  let end = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    const currAve = (arr[start] + arr[end]) / 2;
    if (currAve === target) return true;
    if (currAve >= target) end--;
    if (currAve <= target) start++;
  }

  return false;
}

console.log(averagePair([1,], 2.5));
