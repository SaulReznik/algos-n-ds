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

    extractMax() {
        if (this.values.length < 2) return -1;
        // swaping before excrating so the time complexity for this operation will be O(1);
        let temp = this.values[1];
        this.values[1] = this.values[this.values.length - 1];
        this.values[this.values.length - 1] = temp;
        const max = this.values.pop();

        let currIndex = 1;

        while (true) {
            let leftChildIndex = 2 * currIndex;
            let rightChildIndex = 2 * currIndex + 1;
            let swap = null;

            if (rightChildIndex < this.values.length && this.values[rightChildIndex] > this.values[currIndex] && this.values[rightChildIndex] > this.values[leftChildIndex]) {
                swap = rightChildIndex;
            } else if (leftChildIndex < this.values.length && this.values[leftChildIndex] > this.values[currIndex]) {
                swap = leftChildIndex;
            }

            if (!swap) break;
            temp = this.values[currIndex];
            this.values[currIndex] = this.values[swap];
            this.values[swap] = temp;
            currIndex = swap;
        }

        return max;
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

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());

console.log(heap.values);
