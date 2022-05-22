function areThereDuplicates(...args) {
  const counts = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i] in counts) {
      return true
    } else {
      counts[args[i]] = 1;
    }
  }

  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'a'));
