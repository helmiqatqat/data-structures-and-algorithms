const Node = require('./Node');

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }
    enqueue(value) {
        let enqueueNode = new Node(value);
        if(!this.front) {
            this.front = enqueueNode
        }
        else if (this.front && this.front.next === null) {
            this.front.next = enqueueNode;
            this.back = enqueueNode;
        }
        else {
            this.back.next = enqueueNode;
            this.back = enqueueNode;
        }
    }
    dequeue() {
        if(!this.front) {
            return false
        }
        else {
            let frontNode = this.front
            if(this.front.next) {
                if(this.front.next === this.back) {
                    this.back = null;
                }
                this.front = this.front.next;
            } else {
                this.front = null
            }
            return frontNode.value
        }   
    }
    peek() {
        if(!this.front) {
            return false
        }
        else {
            return this.front.value
        }
    }
    isEmpty() {
        if(this.front) {
            return false
        }
        else {
            return true
        }
    }
}
 
module.exports = Queue