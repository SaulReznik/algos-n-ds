const canConstruct = (target, wordBank, memo = {}) => {
  if (memo.hasOwnProperty(target)) return memo[target];
  if (target === '') return true;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      memo[suffix] = canConstruct(suffix, wordBank, memo);
      if (memo[suffix]) return true;
    }
  }

  memo[target] = false;
  return memo[target];
};


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // false
console.log('-------------');
const canConstructTable = (target, wordBank) => {
  const table = new Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < target.length + 1; i++) {
    if (table[i]) {
      for (let word of wordBank) {
        const suffix = target.slice(i);
        if (suffix.startsWith(word)) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
}

console.log(canConstructTable('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstructTable('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstructTable('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstructTable('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // false
