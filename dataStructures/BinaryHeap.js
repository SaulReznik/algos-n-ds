const sinkDown = (index, heap) => {
    let currIndex = index;

    while (true) {
        let leftChildIndex = 2 * currIndex;
        let rightChildIndex = 2 * currIndex + 1;
        let swap = null;

        if (rightChildIndex < heap.length && heap[rightChildIndex] > heap[currIndex] && heap[rightChildIndex] > heap[leftChildIndex]) {
            swap = rightChildIndex;
        } else if (leftChildIndex < heap.length && heap[leftChildIndex] > heap[currIndex]) {
            swap = leftChildIndex;
        }

        if (!swap) break;
        const temp = heap[currIndex];
        heap[currIndex] = heap[swap];
        heap[swap] = temp;
        currIndex = swap;
    }
};

class BinaryHeap {
    constructor() {
        this.values = [0];
    }

    insert(value) {
        this.values.push(value);
        let index = this.values.length - 1;
        let parentIndex = Math.floor(index / 2);

        while (this.values[index] > this.values[parentIndex] && index > 1) {
            if (!index) break;
            let temp = this.values[index];
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            index = parentIndex;
            parentIndex = Math.floor(index / 2);
        };

        console.log(this.values.join());
    }

    heapify(arr) {
        this.values = [0, ...arr];
        // Half of the elements are already "on the bottom" so we don't need to sink them down
        let index = Math.floor(this.values.length / 2);

        while (index > 0) {
            sinkDown(index, this.values);
            index--;
        };

        console.log(this.values.join());
    }

    extractMax() {
        if (this.values.length < 2) return -1;
        // swaping before excrating so the time complexity for this operation will be O(1);
        let temp = this.values[1];
        this.values[1] = this.values[this.values.length - 1];
        this.values[this.values.length - 1] = temp;
        const max = this.values.pop();

        sinkDown(1, this.values);

        return max;
    }

    isEmpty() {
        return this.values.length <= 1;
    }

    getSize() {
        return this.values.length - 1;
    }
}

const heap = new BinaryHeap();

heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.insert(7);

// heap.heapify([4, 1, 3, 6, 2, 5, 7]);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);

exports.default = BinaryHeap;

