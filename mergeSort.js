const merge = (arr1, arr2) => {
  const result = [];

  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          result.push(arr1[i]);
          i++;
      } else {
          result.push(arr2[j]);
          j++;
      }
  }

  if (i < arr1.length) {
      result.push(...arr1.slice(i));
  } else {
      result.push(...arr2.slice(j));
  }

  return result;
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const half = Math.floor(arr.length / 2);
  const first = arr.slice(0, half);
  const second = arr.slice(half);
  console.log({first, second});
  return merge(mergeSort(first), mergeSort(second));

}

console.log(mergeSort([3,6,8,0,2,4,5,9,1]))
