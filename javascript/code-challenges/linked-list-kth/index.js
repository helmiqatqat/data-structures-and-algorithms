'use strict';

/* eslint-disable no-constant-condition */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}
class Linkedlist {
  constructor() {this.head = null;}
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
      }}}
  kthFromEnd(k) {
    let newArr = [];
    let currentNode = this.head;
    while (true) {
      newArr.push(currentNode.value);
      currentNode = currentNode.next;
      if (currentNode === null) {
        break;
      }}
    if(k > newArr.length || newArr.length === 0 || k < 0 || !newArr[newArr.length - 1 - k] || newArr.length <= 1) {
      return 'Exception';
    } else if (newArr[newArr.length - 1 - k] === this.findMiddleNode()) {
      return 'Happy path';
    } else {
      return newArr[newArr.length - 1 - k];
    }}
  findMiddleNode() {
    let newArr = [];
    let currentNode = this.head;
    while (true) {
      newArr.push(currentNode.value);
      currentNode = currentNode.next;
      if (currentNode === null) {
        break;
      }}
    return newArr[Math.floor(newArr.length / 2)];
  }}

module.exports = Linkedlist;
