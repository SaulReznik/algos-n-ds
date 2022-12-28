const canConstruct = (target, wordBank, memo = {}) => {
  if (memo.hasOwnProperty(target)) return memo[target];
  if (target === '') return true;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      memo[suffix] = canConstruct(suffix, wordBank, memo)
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

