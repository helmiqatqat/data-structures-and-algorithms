'use strict';

/* eslint-disable no-constant-condition */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }
  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
    } else {
      let pointer = this.head;
      while (true) {
        if (pointer.next === null) {
          pointer.next = new Node(val);
          return 0;
        }
        pointer = pointer.next;
      }
    }
  }
  insertBefore(val, newValue) {
    let pointer = this.head;
    while (true) {
      if (val === this.head.value) {
        this.head = new Node(newValue, this.head);
        return 0;
      }
      if (pointer.next.value === val) {
        pointer.next = new Node(newValue, pointer.next);
        return 0;
      }
      if(pointer.next === null && val !== null) {
        return 0;
      }
      pointer = pointer.next;
    }
  }
  insertAfter(val, newValue) {
    let pointer = this.head;
    while(true) {
      if(pointer.value === val) {
        pointer.next = new Node(newValue, pointer.next);
        return 0;
      }
      pointer = pointer.next;
    }
  }
  toString() {
    let newArr = [];
    let currentNode = this.head;
    while (true) {
      newArr.push(`{${currentNode.value}}`);
      currentNode = currentNode.next;
      if (currentNode === null) {
        newArr.push('NULL');
        break;
      }
    }
    return newArr.join(' -> ');
  }
}

module.exports = Linkedlist;

