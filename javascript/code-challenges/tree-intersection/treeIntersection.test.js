'use strict';
const treeIntersection = require('./treeIntersection');
const {BinaryTree} = require('./Library');
const {bt_1, bt_2} = require('./Testsamples');
describe('Test for treeIntersection function', () => {
  test('Returns all the values that exists in both binary trees', () => {
    expect(treeIntersection(bt_1, bt_2)).toEqual([100,160,125,200,175,350,500]);
  }),
  test('Returns error message when binary trees roots are null', () => {
    const test_1 = new BinaryTree();
    const test_2 = new BinaryTree();
    expect(treeIntersection(test_1, test_2)).toEqual('Binary trees must not have root values of null');
  });
});
