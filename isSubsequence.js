function isSubsequence(sample, target) {
  let sampleIndex = 0;

  for (let i = 0; i < target.length; i++) {
      if (target[i] === sample[sampleIndex]) sampleIndex++;
      if (sampleIndex === sample.length - 1) return true;
  }

  return false;
}
