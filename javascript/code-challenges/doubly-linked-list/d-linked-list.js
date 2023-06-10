class Node {
  constructor(value, next, previous) {
    this.value = value || null;
    this.next = next || null;
    this.previous = previous || null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  insert(val) {
    if(this.head !== null) {
      this.head.value = new Node(val);
    }
    else {
      const newNode = new Node(val,this.head);
      this.head.previous = newNode;
      this.head = newNode;
    }
  }
}
