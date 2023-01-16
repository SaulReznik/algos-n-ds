// You are givven a target string and an array of words
// You need to return how many possible ways to construct the target string with the words from wordbank

const countConstruct = (target, wordBank, memo = {}) => {
  if (memo.hasOwnProperty(target)) return memo[target];
  if (target === '') return 1;

  let total = 0

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const sum = countConstruct(suffix, wordBank, memo);

      total += sum;
    }
  }

  memo[target] = total;
  return total;
};

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // 0
console.log('------------');

const countConstructTable = (target, wordBank) => {
  const table = new Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i < target.length + 1; i++) {
    if (table[i]) {
      for (let word of wordBank) {
        const suffix = target.slice(i);
        if (suffix.startsWith(word)) {
          table[i + word.length] += table[i];
        }
      }
    }
  }

  return table[target.length];
}

console.log(countConstructTable('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstructTable('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstructTable('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstructTable('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // 0
