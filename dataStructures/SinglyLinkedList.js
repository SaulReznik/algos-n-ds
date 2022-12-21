class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.length) return undefined;

    let curr = this.head;
    let pre = this.head;

    while (curr.next) {
      pre = curr;
      curr = curr.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }

  shift() {
    if (!this.head) return undefined;
    const curr = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return curr;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++
  }

  get(index) {
    if (index < 0 || index > this.length) return null;

    let counter = 0;
    let target = this.head;

    while (counter < index) {
      target = target.next;
      counter++;
    }

    return target;
  }

  set(index, value) {
    const target = this.get(index);

    if (!target) return false;

    target.val = value;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    const pre = this.get(index - 1);
    const node = new Node(value);
    const preNext = pre.next;
    pre.next = node;
    node.next = preNext;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const pre = this.get(index - 1);
    const curr = this.get(index);
    pre.next = curr.next;
    this.length--;
    return curr;
  }

  reverese() {
    let prev = null;
    let curr = this.head;
    let next = curr.next;
    this.head = this.tail;
    this.tail = curr;
    for (let i = 0; i < this.length; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return this;
  }

  traverse() {
    let current = this.head;

    while (current) {
      console.log(current.val)
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('there');
list.push('bruh');

console.log(list.traverse());

// list.pop();
// list.pop();
// list.pop();
// console.log(list.traverse());

// list.shift();
// list.shift();
// list.shift();
// console.log(list.traverse());

// list.unshift('Hello shift');
// list.unshift('there shift');
// list.unshift('bruh shift');
// console.log(list.traverse());
console.log('--------')
list.reverese();
console.log(list.traverse());
