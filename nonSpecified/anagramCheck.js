function validAnagram(str1, str2) {
  const letters = {};
  if (str1.length !== str2.length) return false
  for (let i = 0; i < str1.length; i++) {
    letters[str1[i]] = ++letters[str1[i]] || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!letters[str2[i]] || !~(--letters[str2[i]])) return false;
  }

  return true;
};

console.log(validAnagram('validAnagram', 'validAnagram'))
