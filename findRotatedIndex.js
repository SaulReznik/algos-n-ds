function findLowest(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right + left) / 2);
  let lowest = -1;

  while (!~lowest && left <= right) {
    if (arr[mid] > arr[mid + 1]) {
      lowest = mid + 1;
      break;
    }
    if (arr[mid] < arr[mid - 1]) {
      lowest = mid - 1;
      break;
    }
    if (arr[left] <= arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((right + left) / 2);
  };

  return lowest;
}

function findRotatedIndex(arr, target) {
  const lowest = findLowest(arr);
  const isInRight = arr[0] > target;

  let left = isInRight ? lowest : 0;
  let right = isInRight ? arr.length - 1 : lowest - 1;
  let mid = Math.floor((right + left) / 2);

  while (arr[mid] !== target && left <= right) {
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((right + left) / 2);
  }

  return arr[mid] === target ? mid : -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)) // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14))// -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12))// -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)) // 5
