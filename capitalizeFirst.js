function capitalizeFirst(arr) {
    if (!arr.length) return arr;
    const capitalized = `${arr[0][0].toUpperCase()}${arr[0].slice(1)}`;
    return [capitalized, ...capitalizeFirst(arr.slice(1))];
}

// Here's the course solution
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']