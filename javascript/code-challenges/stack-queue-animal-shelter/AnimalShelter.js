const Queue = require('./lib/Queue')

class AnimalShelter {
    constructor() {
        this.dogs = new Queue();
        this.cats = new Queue();
    }
    enqueue(animal) {
        if((animal.species === "dog" || animal.species === "cat") && typeof animal.name === "string") {
            if(animal.species === "dog") {
                this.dogs.enqueue(animal)
            }
            else {
                this.cats.enqueue(animal)
            }
        } else {
            return false
        }
    }
    dequeue(pref) {
        if(pref === "dog") {
            return this.dogs.dequeue()
        }
        else if (pref === "cat"){
            return this.cats.dequeue()
        }
        else {
            return null;
        }
    }
}

module.exports = AnimalShelter