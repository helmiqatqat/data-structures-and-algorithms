const AnimalNode = require('./Node');

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }
    enqueue(animal) {
        let enqueueNode = new AnimalNode(animal);
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
            return frontNode.animal
        }   
    }
}
 
module.exports = Queue