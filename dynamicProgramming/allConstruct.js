const allConstruct = (target, wordBank, memo = {}) => {
  if (memo.hasOwnProperty(target)) return memo[target]
  if (target === '') return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeee', ['e', 'ee', 'eee', 'eeee', 'eeeee']));
console.log('--------------------');
const allConstructTable = (target, wordBank) => {
  const table = new Array(target.length + 1).fill().map(_ => []);
  table[0] = [[]];

  for (let i = 0; i < target.length + 1; i++) {
    for (let word of wordBank) {
      const suffix = target.slice(i);
      if (suffix.startsWith(word)) {
        const newCombinations = table[i].map(subArr => [...subArr, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }

  return table[target.length];
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeee', ['e', 'ee', 'eee', 'eeee', 'eeeee']));
