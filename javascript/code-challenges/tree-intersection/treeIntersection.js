function treeIntersection(tree1, tree2) {
  const map = new Map();
  const result = [];

  if(tree1.root && tree2.root) {
    const traverseAndInsertToMap = (node) => {
      if (!node) return;
      map.set(node.value, true);
      traverseAndInsertToMap(node.left);
      traverseAndInsertToMap(node.right);
    };

    const traverseAndCheckIntersection = (node) => {
      if (!node) return;
      if (map.has(node.value)) {
        result.push(node.value);
      }
      traverseAndCheckIntersection(node.left);
      traverseAndCheckIntersection(node.right);
    };

    traverseAndInsertToMap(tree1.root);
    traverseAndCheckIntersection(tree2.root);

    return result;
  }
  else return 'Binary trees must not have root values of null';
}

module.exports = treeIntersection;
