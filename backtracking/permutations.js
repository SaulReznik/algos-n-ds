const nums = [1, 2, 3, 4];

const helper = (index, nums) => {
  if (index === nums.length) return [[]];

  const perms = [];
  const currPerms = helper(index + 1, nums);

  for (let i = 0; i < currPerms.length; i++) {
    const currPerm = currPerms[i];

    for (let j = 0; j <= currPerm.length; j++) {
      const copyPerm = currPerm.slice();
      copyPerm.splice(j, 0, nums[index]);
      perms.push(copyPerm);
    }
  }

  return perms;
};

const permutationsRecusive = nums => {
  return helper(0, nums);
}

const permutationsIterative = nums => {
  let perms = [[]];

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const nextPerms = [];

    for (let j = 0; j < perms.length; j++) {
      const perm = perms[j];

      for (let k = 0; k <= perm.length; k++) {
        const copyPerm = perm.slice();
        copyPerm.splice(k, 0, currNum);
        nextPerms.push(copyPerm);
      }
    }
    perms = nextPerms;
  };

  return perms;
};

console.log(permutationsRecusive(nums));
