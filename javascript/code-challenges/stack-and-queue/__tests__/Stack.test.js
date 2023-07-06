const Stack = require('../lib/Stack')

describe('Test Stack', () => {
    test('Test push Method', () => {
        const stack = new Stack();
        stack.push(1)
        expect(stack.top).not.toBe(null);
    })
    test('Test pop Method', () => {
        const stack = new Stack();
        expect(stack.pop()).toBe(false);
        stack.push(1)
        stack.pop()
        expect(stack.top).toBe(null);
    })
    test('Test peek Method', () => {
        const stack = new Stack();
        expect(stack.peek()).toBe(false);
        stack.push(1)
        expect(stack.peek()).toBe(1);
    })
    test('Test isEmpty Method', () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    })
}) 