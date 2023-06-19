'use strict';

// Require our linked list implementation
const Linkedlist = require('../index');
describe('test linked list', () => {
  test('Can successfully add a node to the end of the linked list', () => {
    const ll = new Linkedlist();
    ll.append(1);
    ll.append(3);
    ll.append(2);
    ll.append(5);// test case
    expect(ll.toString()).toEqual('{1} -> {3} -> {2} -> {5} -> NULL');
  });
  test('Can successfully add multiple nodes to the end of a linked list', () => {
    const ll = new Linkedlist();
    ll.append(1);
    ll.append(3);
    ll.append(2);
    ll.append(5); // test node 1
    ll.append(6); // test node 2
    expect(ll.toString()).toEqual('{1} -> {3} -> {2} -> {5} -> {6} -> NULL');
  });
  test('Can successfully insert a node before a node located i the middle of a linked list', () => {
    const ll = new Linkedlist();
    ll.append(1);
    ll.append(3);
    ll.append(2);
    ll.insertBefore(3, 7);
    expect(ll.toString()).toEqual('{1} -> {7} -> {3} -> {2} -> NULL');
  });
  test('Can successfully insert a node before the first node of a linked list', () => {
    const ll = new Linkedlist();
    ll.append(1);
    ll.append(3);
    ll.append(2);
    ll.insertBefore(1, 7);
    expect(ll.toString()).toEqual('{7} -> {1} -> {3} -> {2} -> NULL');
  });
  test('Can successfully insert after a node in the middle of the linked list', () => {
    const ll = new Linkedlist();
    ll.append(1);
    ll.append(3);
    ll.append(2);
    ll.insertAfter(3, 7);
    expect(ll.toString()).toEqual('{1} -> {3} -> {7} -> {2} -> NULL');
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    const ll = new Linkedlist();
    ll.append(1);
    ll.append(3);
    ll.append(2);
    ll.insertAfter(2, 7);
    expect(ll.toString()).toEqual('{1} -> {3} -> {2} -> {7} -> NULL');
  });
});
