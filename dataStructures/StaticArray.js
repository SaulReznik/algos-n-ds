class StaticArray {
  constructor(capacity = 1) {
    this.arr = new Array(capacity); // Empty array with given "allocated memory"
    this.capacity = capacity; // Capacity is the size (aka memory allocated for the fixed size array).
    this.length = 0; // Length is the number of 'real' values in arr
  }

  // Insert n into arr at the next open position.
  insertEnd(n) {
    if (this.length < this.capacity) {
      this.arr[this.length] = n;
      this.length++;
    }
  }

  // Remove from the last position in the array if the array
  // is not empty (i.e. length is non-zero).
  removeEnd() {
    if (this.length > 0) {
      this.arr[this.length] = undefined;
      this.length--;
    }
  }

  // Insert n into index "index" after shifting elements to the right.
  // Assuming "index" is a valid index and arr is not full.
  insertMiddle(index, n) {
    // shifitng elements
    for (let i = this.length; i >= index; i--) {
      this.arr[i] = this.arr[i - 1];
    }

    this.length++;
    this.arr[index] = n;
  }

  // Remove value at index "index" before shifting elements to the left.
  // Assuming "index" is a valid index.
  removeMiddle(index) {
    // shifitng elements
    for (let i = index; i < this.length; i++) {
      this.arr[i] = this.arr[i + 1];
    };

    this.length--;
  }

  printArr() {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i + 1 === this.length) {
        result += this.arr[i];
      } else {
        result += `${this.arr[i]} `;
      }
    }

    return result;
  }
}

const arr = new StaticArray(5);

arr.insertEnd(4);
arr.insertEnd(2);
arr.insertEnd(96);
arr.insertEnd(0);
arr.insertEnd(2);
arr.insertEnd('too much');
arr.insertEnd('will not fit into array');
console.log(arr.printArr());
arr.removeEnd();
console.log(arr.printArr());
arr.insertEnd('Now will fit');
console.log(arr.printArr());
arr.removeEnd();
arr.removeEnd();
console.log(arr.printArr());
arr.insertMiddle(1, 'in the middle');
arr.insertEnd(0);
arr.insertEnd(2);
console.log(arr.printArr());
arr.removeMiddle(1);
console.log(arr.printArr());
