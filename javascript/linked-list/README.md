# Linked list

## Linked-list.js Code

```code
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
  insert(val) {
    if(this.head === null) {
      this.head = new Node(val);
    } else {
      this.head = new Node(val, this.head);
    }
  }
  includes(val) {
    let currentNode = this.head;
    while(true) {
      console.log(currentNode.value);
      if(currentNode.value === val) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
      if (currentNode === null) {
        return false;
      }
    }
  }
  toString() {
    let newArr = [];
    let currentNode = this.head;
    while(true) {
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
```

## Linked-list-test.js Code

```code
'use strict';

const Linkedlist = require('../index');

describe('test linked list', () => {
  test('creates a linkedlist', () => {
    const newList = new Linkedlist();
    expect(Object.keys(newList).length).toEqual(1);
  });
  test('adds to the linkedlist', () => {
    const newList = new Linkedlist();
    newList.insert(1);
    newList.insert(2);
    expect(newList.head.value).toEqual(2);
    expect(newList.head.next).toEqual({value: 1, next: null});
  });
  test('toString gives specific string', () => {
    const newList = new Linkedlist();
    newList.insert(1);
    newList.insert(2);
    expect(newList.toString()).toEqual(`{2} -> {1} -> NULL`);
  });
});

```
