const { default: MaxHeap } = require("./BinaryHeap.js");

class MedianFinder {
  constructor() {
    this.maxHeap = new MaxHeap();
    this.minHeap = new MaxHeap();
  };

  swapBetweenHeaps(from, to) {
    const poped = from.extractMax();
    to.insert(-poped);
  }

  insert(n) {
    this.maxHeap.insert(n);

    if (!this.maxHeap.isEmpty() && !this.minHeap.isEmpty() && this.maxHeap.values[1] > -this.minHeap.values[1]) this.swapBetweenHeaps(this.maxHeap, this.minHeap)

    if (this.maxHeap.getSize() > this.minHeap.getSize() + 1) this.swapBetweenHeaps(this.maxHeap, this.minHeap)
    if (this.minHeap.getSize() > this.maxHeap.getSize() + 1) this.swapBetweenHeaps(this.minHeap, this.maxHeap)
  }

  getMedian() {
    if (this.maxHeap.getSize() > this.minHeap.getSize()) return this.maxHeap.values[1];
    if (this.minHeap.getSize() > this.maxHeap.getSize()) return -this.minHeap.values[1];

    if (this.maxHeap.isEmpty()) return -1;

    return (this.maxHeap.values[1] + -this.minHeap.values[1]) / 2
  }
};

const finderInstance = new MedianFinder();

finderInstance.insert(1);
console.log(finderInstance.getMedian());
finderInstance.insert(2);
console.log(finderInstance.getMedian());
finderInstance.insert(3);
console.log(finderInstance.getMedian());
finderInstance.insert(4);
console.log(finderInstance.getMedian());
finderInstance.insert(5);
console.log(finderInstance.getMedian());
finderInstance.insert(6);
console.log(finderInstance.getMedian());
finderInstance.insert(7);
console.log(finderInstance.getMedian());
finderInstance.insert(8);
console.log(finderInstance.getMedian());
finderInstance.insert(9);
console.log(finderInstance.getMedian());

