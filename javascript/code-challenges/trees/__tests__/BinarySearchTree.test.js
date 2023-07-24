const Node = require('../lib/Node');
const BinarySearchTree = require('../lib/BinarySearchTree');


let bst;

describe('Testing Binary Search Tree methods', () => {
  beforeEach(() => {
    let one = new Node(5);
    let two = new Node(2);
    let three = new Node(6);
    let four = new Node(1);
    let five = new Node(3);
    let six = new Node(4);
    let seven = new Node(7);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    three.right = seven;
    bst = new BinarySearchTree(one);
  });
  test('Test preOrder inherited method', () => {
    expect(bst.preOrder()).toEqual([5, 2, 1, 3, 6, 4, 7]);
  });
  test('Test inOrder inherited method', () => {
    expect(bst.inOrder()).toEqual([1, 2, 3, 5, 4, 6, 7]);
  });
  test('Test postOrder inherited method', () => {
    expect(bst.postOrder()).toEqual([1, 3, 2, 4, 7, 6, 5]);
  });
  test('Test Contains return true when value exists and false otherwise', () => {
    expect(bst.contains(2)).toBeTruthy();
    expect(bst.contains(999)).toBeFalsy();
  });
});

describe('Testing Binary Search Tree adding nodes correctly', () => {
  beforeEach(() => {
    bst = new BinarySearchTree();
  });
  test('Create an empty instance of class', () => {
    expect(bst.root).toBeNull();
  });
  test('Adds the value to the root if there is no root', () => {
    bst.add(5);
    expect(bst.root.value).toEqual(5);
  });
  test('Adds to the left of the node if value added is less', () => {
    bst.add(5); // root
    bst.add(3);
    expect(bst.root.left).not.toBeNull();
    expect(bst.root.left.value).toEqual(3);
  });
  test('Adds to the right of the node if value added is bigger', () => {
    bst.add(5); // root
    bst.add(8);
    expect(bst.root.right).not.toBeNull();
    expect(bst.root.right.value).toEqual(8);
  });
});
