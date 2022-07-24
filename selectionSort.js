const arr = [3, 6, 1, 2, 8, 4, 5, 9, 7];

const selectionSort = arr => {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = min; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
};

console.log(selectionSort(arr));
