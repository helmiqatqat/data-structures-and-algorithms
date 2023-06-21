'use strict';

const Linkedlist = require('../index');

describe('test linked list', () => {
  const ll = new Linkedlist();
  ll.append(1);
  ll.append(3);
  ll.append(8);
  ll.append(2);
  test('Normal case where', () => {
    expect(ll.kthFromEnd(0)).toEqual(2);
    expect(ll.kthFromEnd(2)).toEqual(3);
    expect(ll.kthFromEnd(6)).toEqual('Exception');
  });
  test('Where k is greater than the length of the linked list', () => {
    expect(ll.kthFromEnd(5)).toEqual('Exception');
  });
  test('Where k and the length of the list are the same', () => {
    expect(ll.kthFromEnd(4)).toEqual('Exception');
  });
  test('Where k is not a positive integer', () => {
    expect(ll.kthFromEnd(-1)).toEqual('Exception');
  });
  test('Where the linked list is of a size 1', () => {
    const ll = new Linkedlist();
    ll.append(1);
    expect(ll.kthFromEnd(1)).toEqual('Exception');
    expect(ll.kthFromEnd(0)).toEqual('Exception');
  });
  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const ll = new Linkedlist();
    ll.append(1);
    ll.append(3);
    ll.append(5);
    expect(ll.kthFromEnd(1)).toEqual('Happy path');
  });
});
