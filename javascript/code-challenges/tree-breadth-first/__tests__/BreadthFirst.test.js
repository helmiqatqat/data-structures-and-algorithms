const TreeNode = require('../lib/TreeNode');
const BinaryTree = require('../lib/BinaryTree');
const breadthFirst = require('../lib/BreadthFirst');

let one = new TreeNode(2);
let two = new TreeNode(7);
let three = new TreeNode(5);
let four = new TreeNode(2);
let five = new TreeNode(6);
let six = new TreeNode(9);
let seven = new TreeNode(5);
let eight = new TreeNode(11);
let nine = new TreeNode(4);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;
five.left = seven;
five.right = eight;
six.left = nine;

const bt = new BinaryTree(one);

describe('Test breadthFirst method', () => {
  test('Return null when there is no root', () => {
    const nullBT = new BinaryTree();
    expect(breadthFirst(nullBT)).toBeNull();
  }) ;
  test('Return the correct sequence of array', () => {
    expect(breadthFirst(bt)).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
});
