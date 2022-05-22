function maxSubarraySum(arr, subLength) {
  if (arr.length < subLength) return null;
  let subMax = arr.slice(0, subLength).reduce((a, b) => a + b);

  for (let i = subLength; i < arr.length; i++) {
    const currSubMax = subMax - (arr[i - subLength]) + (arr[i]);
    console.log(arr[i - subLength], arr[i]);
    console.log({ subMax, currSubMax });
    subMax = Math.max(subMax, currSubMax);
  }

  return subMax;
}

console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
