function binarySearch(arr, target){
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  while(arr[middle] !== target && left <= right) {
      if (target > arr[middle]) {
          left = middle + 1;
      } else {
          right = middle - 1; 
      }
      middle = Math.floor((right + left) / 2);
  }

  return arr[middle] === target ? middle : -1;
}

console.log(binarySearch([1,2,3,4,5], 2));
