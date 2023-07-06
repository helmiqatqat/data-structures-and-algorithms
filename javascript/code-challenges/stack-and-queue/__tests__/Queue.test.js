const Node = require('../lib/Node')
const Queue = require('../lib/Queue')

describe('Test Queue', () => {
    test('Test enqueue Method', () => {
        const queue = new Queue();
        queue.enqueue(1)
        expect(queue.front).not.toBe(null);
    })
    test('Test dequeue Method', () => {
        const queue = new Queue();
        expect(queue.dequeue()).toBe(false)
        queue.enqueue(1);
        queue.dequeue()
        expect(queue.front).toBe(null);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.back).toEqual(new Node(3))
        queue.dequeue()
        expect(queue.back).toEqual(new Node(3))
        queue.dequeue()
        expect(queue.back).toEqual(null)
        
    })
    test('Test peek Method', () => {
        const queue = new Queue();
        expect(queue.peek()).toBe(false);
        queue.enqueue(1)
        expect(queue.peek()).toBe(1);
    })
    test('Test isEmpty Method', () => {
        const queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    })
}) 