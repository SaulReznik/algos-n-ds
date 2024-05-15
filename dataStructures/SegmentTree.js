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

  updateValue(index, val) {
    if (this.leftIndex === this.rightIndex) {
      if (this.leftIndex === index) this.value = val;
      return;
    }

    const mid = Math.floor((this.leftIndex + this.rightIndex) / 2);
    if (index <= mid) {
      this.left.updateValue(index, val);
    } else {
      this.right.updateValue(index, val);
    }

    this.value = this.left.value + this.right.value;
  }

  rangeQuery(left, right) {
    if (this.leftIndex === left && this.rightIndex === right) {
      return this.value;
    };

    const mid = Math.floor((this.leftIndex + this.rightIndex) / 2);

    if (mid < left) {
      return this.right.rangeQuery(left, right)
    } else if (mid >= right) {
      return this.left.rangeQuery(left, right)
    } else {
      return this.left.rangeQuery(left, mid) + this.right.rangeQuery(mid + 1, right);
    }
  }
}

const arr = [4, 12, 3, 0, 8]
const tree = buildTree(arr, 0, arr.length - 1);

console.log(tree);
console.log('-------------');
tree.updateValue(0, 99);
console.log(tree);
console.log('-------------');
console.log(tree.rangeQuery(0, 4));
console.log(tree.rangeQuery(1, 4));
console.log(tree.rangeQuery(3, 4));
