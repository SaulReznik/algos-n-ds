class BinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
    
        while (this.values[index] > this.values[parentIndex]) {
            if (!index) break;
            let temp = this.values[index];
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        };
    
        console.log(this.values); 
    }

    extractMax() {
        let temp = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values[this.values.length - 1] = temp;
        const max = this.values.pop();

        let index = 0;
        while (true) {
            const element = this.values[index];
            let leftChildIndex = 2 * (index + 1);
            let rightChildIndex = 2 * (index + 2);
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIndex < this.values.length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > this.values[index]) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < this.values.length) {
                rightChild = this.values[rightChildIndex];
                if (
                    (!swap && rightChild > this.values[index]) 
                    || (swap && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            
            if (!swap) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
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

heap.extractMax();

console.log(heap.values);