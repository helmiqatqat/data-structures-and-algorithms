'use strict';

const {Linkedlist, zipLists} = require('../index');

describe('test linked list zip', () => {
  test('parameters are equal in length case where', () => {
    const list1 = new Linkedlist();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    const list2 = new Linkedlist();
    list2.append(5);
    list2.append(9);
    list2.append(4);
    expect(zipLists(list1, list2).toString()).toEqual('{1} -> {5} -> {3} -> {9} -> {2} -> {4} -> NULL');
  });
  test('list1 bigger than list2', () => {
    const list1 = new Linkedlist();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    const list2 = new Linkedlist();
    list2.append(5);
    list2.append(9);
    expect(zipLists(list1, list2).toString()).toEqual('{1} -> {5} -> {3} -> {9} -> {2} -> NULL');
  });
  test('list2 bigger than list1', () => {
    const list1 = new Linkedlist();
    list1.append(1);
    list1.append(3);

    const list2 = new Linkedlist();
    list2.append(5);
    list2.append(9);
    list2.append(4);
    expect(zipLists(list1, list2).toString()).toEqual('{1} -> {5} -> {3} -> {9} -> {4} -> NULL');
  });
});
