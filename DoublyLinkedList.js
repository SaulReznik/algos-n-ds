class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
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

  unshift(val) {
    const node = new Node(val);
      
    if (!this.length) {
        this.head = node;
        this.tail = node;
    } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    const middle = Math.floor(this.length / 2);
    let curr;
    let target;

    if (index > middle) {
      curr = this.length - 1;
      target = this.tail;
      while(curr >= index) {
        target = target.prev;
        curr--;
      }
    } else {
      curr = 0;
      target = this.head;
      while(curr !== index) {
        target = target.next;
        curr++;
      }
    }
    return target;
  }

  set(index, value) {
    const target = this.get(index);

    if (!target) return false;

    target.val = value;
    return true;
  }

  insert(value, index) {
    if (index < 0 || index >= this.length) return false;
    if (!index) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    const target = this.get(index);
    const node = new Node(value);
    node.prev = target.prev;
    node.next = target;
    target.prev = node;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (!index) return !!this.shift();
    if (index === this.length) return !!this.pop();
    const target = this.get(index);
    target.next.prev = target.prev;
    target.prev.next = target.next;
    target.prev = null;
    target.next = null;
    this.length--;
    return target;
  }

  reverse() {
    let temp = null;
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    while(curr !== null) {
      temp = curr.prev;
      curr.prev = curr.next;
      curr.next = temp;
      curr = curr.prev;
    }
    return this;
  }
}

const list = new DoublyLinkedList();

list.push(5).push(10).push(15).push(20);
console.log(list.reverse());
