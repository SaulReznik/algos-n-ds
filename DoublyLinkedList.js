class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++
    return this;
  }

  pop() {
    if (!this.length) return undefined;
    let val = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = val.prev;
      this.tail.next = null;
      val.prev = null;
    }
    this.length--;
    return val;
  }

  shift() {
    if (!this.length) return undefined;
    let val = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = val.next;
      this.head.prev = null;
      val.next = null;
    }
    this.length--;
    return val;
  }
}
