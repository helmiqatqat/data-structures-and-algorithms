const Node = require('../../trees/lib/Node')
const BinaryTreeModified = require('../BinaryTreeModified')

describe('Test findMax method in binary tree', () => {
    
    beforeEach(() => {
        let one = new Node(2);
        let two = new Node(7);
        let three = new Node(5);
        let four = new Node(2);
        let five = new Node(9);
        let six = new Node(6);
        let seven = new Node(11);
        let eight = new Node(4);
        one.left = two;
        one.right = three;
        two.left = four;
        three.right = five;
        four.left = six;
        four.right = seven;
        five.left = eight;
        btm = new BinaryTreeModified(one);
    })
    test('Returns false when there is no root', () => {
        const btmNull = new BinaryTreeModified()
        expect(btmNull.findMax()).toBeFalsy()
    })
    test('Returns the biggest value within the tree nodes', () => {
        expect(btm.findMax()).toBe(11)
    })
})