const buildTree = (array, leftIndex, rightIndex) => {
  if (leftIndex === rightIndex) return new SegmentTree(array[leftIndex], leftIndex, rightIndex);

  const root = new SegmentTree();

  const mid = Math.floor((leftIndex + rightIndex) / 2);

  root.leftIndex = leftIndex;
  root.rightIndex = rightIndex;
  root.left = buildTree(array, leftIndex, mid);
  root.right = buildTree(array, mid + 1, rightIndex);
  root.value = root.left.value + root.right.value;
  return root;
}

class SegmentTree {
  constructor(value, leftIndex, rightIndex) {
    this.value = value;
    this.leftIndex = leftIndex;
    this.rightIndex = rightIndex;
    this.left = null;
    this.right = null;
  }
}

const arr = [4, 12, 3, 0, 8]
const tree = buildTree(arr, 0, arr.length - 1);

console.log(tree);
