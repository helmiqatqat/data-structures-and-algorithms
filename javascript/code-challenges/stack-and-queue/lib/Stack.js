const Node = require('./Node')

class Stack {

    constructor() {
        this.top = null
    }
    push(value) {
        let newNode = new Node(value);
        if(!this.top) {
            this.top = newNode;
        } 
        else {
            newNode.next = this.top;
            this.top = newNode
        }
    }
    pop() {
        if(!this.top) {
            return false
        }
        else {
            let topNode = this.top;
            this.top = this.top.next
            return topNode
        }
    }
    peek() {
        if(!this.top) {
            return false
        }
        else {
            return this.top.value
        }
    }
    isEmpty() {
        return this.top ? false : true
    }
}

module.exports = Stack
