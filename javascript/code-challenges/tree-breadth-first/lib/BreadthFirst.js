const Queue = require('./Queue');

function breadthFirst(tree) {
  let breadthArray = [];
  const breadthQueue = new Queue();
  if(tree.root) {
    breadthQueue.enqueue(tree.root);
    while(breadthQueue.front) {
      const node = breadthQueue.dequeue();
      breadthArray.push(node.value);
      if(node.left) {breadthQueue.enqueue(node.left);}
      if(node.right) {breadthQueue.enqueue(node.right);}
    }
  } else return null;
  return breadthArray;
}

module.exports = breadthFirst;
