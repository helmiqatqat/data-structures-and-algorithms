const Node = require('../lib/Node')

describe('Node test', () => {
    test('Creates a new Node', () => {
        const testNode = new Node()
        expect(testNode.value).toBeUndefined()
        expect(testNode.left).toBeNull()
        expect(testNode.right).toBeNull()
    })
    test('Adds a value to the new Node', () => {
        const testNode = new Node(1)
        expect(testNode.value).toEqual(1)
    })
})