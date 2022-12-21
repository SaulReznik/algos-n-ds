class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
};

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        const node = new Node(value, priority);
        this.values.push(node);
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        while (this.values[index].priority < this.values[parentIndex]?.priority || 0) {
            if (!index) break;
            let temp = this.values[index];
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        };

        console.log(this.values); 
    }

    dequeue() {
        let temp = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values[this.values.length - 1] = temp;
        const min = this.values.pop();

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
                if (leftChild.priority < this.values[index].priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < this.values.length) {
                rightChild = this.values[rightChildIndex];
                if (
                    (!swap && rightChild.priority < this.values[index].priority) 
                    || (swap && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex;
                }
            }
            
            if (!swap) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }

        return min;
    }
}

const queue = new PriorityQueue();

queue.enqueue('afnv', 50);
queue.enqueue('afnv', 20);
queue.enqueue('afnv', 30);
queue.enqueue('afnv', 5);
queue.enqueue('afnv', 17);
queue.enqueue('afnv', 41);
queue.enqueue('afnv', 15);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());