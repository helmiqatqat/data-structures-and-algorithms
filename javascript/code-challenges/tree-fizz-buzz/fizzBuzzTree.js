function fizzBuzzTree(ktree) {
  let newTree = new Object(ktree);
  const traverse = (node) => {
    switch (true) {
    case (node.value % 3 === 0 && node.value % 5 !== 0):
      node.value = 'Fizz';
      break;
    case (node.value % 5 === 0 && node.value % 3 !== 0):
      node.value = 'Buzz';
      break;
    case (node.value % 3 === 0 && node.value % 5 === 0):
      node.value = 'FizzBuzz';
      break;
    case (node.value % 3 !== 0 && node.value % 5 !== 0):
      node.value = `${node.value}`;
      break;
    }
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(newTree.root);
  return newTree;
}

module.exports = fizzBuzzTree;
