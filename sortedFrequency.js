function sortedFrequency(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right + left) / 2);

  // Searching for any value that is eqaul to our target
  while (arr[mid] !== target && left <= right) {
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    };

    mid = Math.floor((right + left) / 2);
  }

  if (arr[mid] !== target) return -1;
  // If we found any value 
  // We set it as our moving point so we can find start and end of targets count
  const found = mid;
  let foundStart = -1;
  let foundEnd = -1;

  // reusing left, right and mid variables to find the start and end elements
  left = 0;
  right = found;
  mid = Math.floor((right + left) / 2);
  // Searching for the start of the numbers
  while (!~foundStart && left <= right) {
    if ((arr[mid] === target && arr[mid] > arr[mid - 1]) || !mid) {
      foundStart = mid;
      break;
    }
    if (arr[mid] !== target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((right + left) / 2);
  }
  // Doing the same for the end
  left = found;
  right = arr.length - 1;
  mid = Math.floor((right + left) / 2);

  while (!~foundEnd && left <= right) {
    if ((arr[mid] === target && arr[mid] < arr[mid + 1]) || mid === arr.length - 1) {
      foundEnd = mid;
      break;
    }
    if (arr[mid] !== target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((right + left) / 2);
  }

  return foundEnd - foundStart + 1;
}

console.log('bruh');
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4 
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
