function countZeroes(arr) {
  if (!arr[0]) return arr.length;
  if (arr[arr.length - 1] || !arr.length) return 0;

  let left = 1;
  let right = arr.length - 2;
  let mid = Math.floor((right + left) / 2);

  while(left <= right) {
      if (arr[mid]) {
          if (!arr[mid+1]) return arr.length - 1 - mid;
          left = mid;
      } else if (!arr[mid]) {
          if (arr[mid - 1]) return arr.length - mid;
          right = mid;
      }
      mid = Math.floor((right + left) / 2);
  }
}

console.log(countZeroes([1,1,1,1,0,0]));
console.log(countZeroes([1,0,0,0,0]));
console.log(countZeroes([0,0,0]));
console.log(countZeroes([1,1,1,1]));
