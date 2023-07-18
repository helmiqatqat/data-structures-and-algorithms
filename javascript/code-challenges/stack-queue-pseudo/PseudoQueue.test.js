const PseudoQueue = require('./PseudoQueue'); // Assuming PseudoQueue class is in a separate file called PseudoQueue.js

describe('PseudoQueue', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  test('enqueue should add values to the PseudoQueue', () => {
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);
    pseudoQueue.enqueue(20);

    expect(pseudoQueue.stack1).toEqual([10, 15, 20]);
  });

  test('dequeue should remove and return values in FIFO order', () => {
    pseudoQueue.stack1 = [5, 10, 15, 20];

    expect(pseudoQueue.dequeue()).toBe(5);
    expect(pseudoQueue.stack2).toEqual([20, 15, 10]);

    expect(pseudoQueue.dequeue()).toBe(10);
    expect(pseudoQueue.stack2).toEqual([20, 15]);
  });
});
