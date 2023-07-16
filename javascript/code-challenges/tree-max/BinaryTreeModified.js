const BinaryTree = require("../trees/lib/BinaryTree")

class BinaryTreeModified extends BinaryTree {
    constructor(root) {
        super(root)
    }
    findMax() {
        if(this.root) {
            const nodesArray = this.preOrder()
            const maxValue = Math.max(...nodesArray)
            return maxValue
        }
        else return false
    }
}
    
    
    

module.exports = BinaryTreeModified