class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  preOrder() {
    let valueArray = [];
    let traverse = (node) => {
      valueArray.push(node.value);
      if(node.left) {traverse(node.left);}
      if(node.right) {traverse(node.right);}
    };
    traverse(this.root);
    return valueArray;
  }
  inOrder() {
    let valueArray = [];
    let traverse = (node) => {
      if(node.left) {traverse(node.left);}
      valueArray.push(node.value);
      if(node.right) {traverse(node.right);}
    };
    traverse(this.root);
    return valueArray;
  }
  postOrder() {
    let valueArray = [];
    let traverse = (node) => {
      if(node.left) {traverse(node.left);}
      if(node.right) {traverse(node.right);}
      valueArray.push(node.value);
    };
    traverse(this.root);
    return valueArray;
  }
}


module.exports = BinaryTree;
