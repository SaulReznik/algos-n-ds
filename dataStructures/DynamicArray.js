class DynamicArray {
  constructor(capacity) {
      if (capacity > 0) {
          this.arr = new Array(capacity);
          this.capacity = capacity;
          this.length = 0;
      }
  }

  get(i) {
      if (i >= 0 && i < this.length) {
        return this.arr[i];
      }
  }

  set(i, n) {
    if (i >= 0 && i < this.length) {
      this.arr[i] = n;
    }
  }

  push(n) {
      if (this.length === this.capacity) {
          this.resize();
      }
      this.arr[this.length] = n;
      this.length++;
  }

  pop() {
      this.length--;

      const poped = this.arr[this.length];

      this.arr[this.length] = undefined;
      return poped;
  }

  resize() {
      this.capacity = this.capacity * 2;

      const doubled = new Array(this.capacity);

      for (let i = 0; i < this.length; i++) {
          doubled[i] = this.arr[i];
      };

      this.arr = doubled;
  }

  getSize() {
      return this.length;
  }

  getCapacity() {
      return this.capacity;
  }
}
