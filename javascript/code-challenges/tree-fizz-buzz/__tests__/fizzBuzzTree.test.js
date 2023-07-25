const TreeNode = require('../../tree-breadth-first/lib/TreeNode');
const BinaryTree = require('../../tree-breadth-first/lib/BinaryTree');
const breadthFirst = require('../../tree-breadth-first/lib/BreadthFirst');
const fizzBuzzTree = require('../fizzBuzzTree');

let one = new TreeNode(8);
let two = new TreeNode(3);
let three = new TreeNode(10);
let four = new TreeNode(1);
let five = new TreeNode(6);
let six = new TreeNode(14);
let seven = new TreeNode(4);
let eight = new TreeNode(7);
let nine = new TreeNode(13);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;
five.left = seven;
five.right = eight;
six.left = nine;

const bt = new BinaryTree(one);

describe('Test fizz buzz k-tree', () => {
  test('Tree nodes values changed to either fizz, buzz, fizzbuzz or string', () => {
    expect(breadthFirst(fizzBuzzTree(bt))).toEqual([ '8', 'Fizz', 'Buzz', '1', 'Fizz', '14', '4', '7', '13' ]);
  });
});

