'use strict';

/* eslint-disable no-constant-condition */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}
class Linkedlist {
  constructor() { this.head = null; }
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

function zipLists(list1, list2) {
  const zippedList = new Linkedlist();
  let pointer1 = list1.head;
  let pointer2 = list2.head;
  while(true) {
    if(pointer1) {
      zippedList.append(pointer1.value);
      pointer1 = pointer1.next;
    }
    if(pointer2) {
      zippedList.append(pointer2.value);
      pointer2 = pointer2.next;
    }
    if(!pointer1 && !pointer2) {
      break;
    }
  }
  return zippedList;
}

module.exports = {
  Linkedlist: Linkedlist,
  zipLists: zipLists
};
