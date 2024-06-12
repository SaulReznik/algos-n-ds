const helperWithoutDuplicates = (index, arr, subsets, currSubset) => {
  if (index >= arr.length) {
    subsets.push([...currSubset]);;
    return;
  }

  currSubset.push(arr[index]);
  helperWithoutDuplicates(index + 1, arr, subsets, currSubset);
  currSubset.pop();
  helperWithoutDuplicates(index + 1, arr, subsets, currSubset);
};

const helperWithDuplicates = (index, arr, subsets, currSubset) => {
  if (index >= arr.length) {
    subsets.push([...currSubset]);;
    return;
  }

  currSubset.push(arr[index]);
  helperWithDuplicates(index + 1, arr, subsets, currSubset);
  while (arr[index + 1] && arr[index] === arr[index + 1]) {
    index++;
  }
  currSubset.pop();
  helperWithDuplicates(index + 1, arr, subsets, currSubset);
};

const getSubsets = (arr, isWithDuplicates = false) => {
  isWithDuplicates && arr.sort((a, b) => a - b);
  const helper = isWithDuplicates ? helperWithDuplicates : helperWithoutDuplicates;
  const subsets = [];
  const currSubset = [];
  helper(0, arr, subsets, currSubset);
  return subsets;
}

console.log(getSubsets([1, 2, 3]));
console.log(getSubsets([1, 2, 2, 3], true));
