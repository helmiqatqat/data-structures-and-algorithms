const Node = require('../lib/Node')
const BinaryTree = require('../lib/BinaryTree')

describe('Test Binary Tree instanciate', () => {
    test('Can successfully instantiate an empty tree', () => {
        const bt = new BinaryTree()
        expect(bt.root).toBeNull()
    })
    test('Can successfully instantiate a tree with a single root node', () => {
        const testNode = new Node(1)
        const bt = new BinaryTree(testNode)
        expect(bt.root).not.toBeNull()
        expect(bt.root.value).toEqual(1)
    })
})

let bt;
describe('Testing Binary Tree methods', () => {
    beforeEach(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        three.left = six;
        three.right = seven;
        bt = new BinaryTree(one);
    })
    test('Test preOrder method', () => {
        expect(bt.preOrder()).toEqual([1, 2, 4, 5, 3, 6, 7])
    })
    test('Test inOrder method', () => {
        expect(bt.inOrder()).toEqual([4, 2, 5, 1, 6, 3 ,7])
    })
    test('Test postOrder method', () => {
        expect(bt.postOrder()).toEqual([4, 5, 2, 6, 7, 3, 1])
    })
})
