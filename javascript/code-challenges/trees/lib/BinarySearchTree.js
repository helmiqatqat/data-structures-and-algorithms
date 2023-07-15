const BinaryTree = require('./BinaryTree')
const Node = require('./Node')
class BinarySearchTree extends BinaryTree {
  constructor(root){
    super(root)
  }
  add(value) {
    if(this.root) {
        let pointer = this.root
        while(true) {
        console.log(pointer.value)
        if(value < pointer.value) {
            if(pointer.left) {
            pointer = pointer.lef
            }
            else {
            const node = new Node(value)
            pointer.left = node
            break;
            }
        }
        else {
            if(pointer.right) {
            pointer = pointer.right
            }
            else {
            const node = new Node(value)
            pointer.right = node
            break;
            }
        }
        }
    } else {
        this.root = new Node(value)
    }
  }
  contains(value) {
    return this.preOrder().includes(value)
  }
}

module.exports = BinarySearchTree