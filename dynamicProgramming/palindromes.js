const str = 'abaab';

const getCurrentLongestPalindrome = (str, l, r) => {
  let max = 0;

  while (l >= 0 && r < str.length && str[l] === str[r]) {
    max = r - l + 1;
    l--;
    r++;
  };

  return max;
};

const getLongestPalindrome = str => {
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    max = Math.max(max, getCurrentLongestPalindrome(str, i, i)); // for odd cases
    max = Math.max(max, getCurrentLongestPalindrome(str, i, i + 1)); // for even cases
  };

  return max;
};

console.log(getLongestPalindrome(str));
