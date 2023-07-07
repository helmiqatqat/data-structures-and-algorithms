const AnimalShelter = require('../AnimalShelter')
const Animal = require('../lib/Animal')

describe('Testing Animal Shelter', () => {
    const animal_1 = new Animal('dog', 'rex')
    const animal_2 = new Animal('cat', 'lilly')
    const animal_3 = new Animal('lion', 'martin')
    const animal_4 = new Animal('dog', 123)
    test('Adding a dog', () => {
        const as = new AnimalShelter()
        as.enqueue(animal_1)
        expect(typeof as.dogs.front.animal === 'object')
    }),
    test('Adding a cat', () => {
        const as = new AnimalShelter()
        as.enqueue(animal_2)
        expect(typeof as.cats.front.animal === 'object')
    }),
    test('Not accepting any species other than dogs and cats', () => {
        const as = new AnimalShelter()
        expect(as.enqueue(animal_3)).toEqual(false)
    }),
    test('Not accepting data type for animal names other than string', () => {
        const as = new AnimalShelter()
        expect(as.enqueue(animal_4)).toEqual(false)
    }),
    test('Returning dog object with dequeue with pref of dog', () => {
        const as = new AnimalShelter()
        as.enqueue(animal_1)
        const result = as.dequeue("dog");
        expect(typeof result).toEqual("object")
        expect(result.species).toEqual("dog")
        expect(typeof result.name).toEqual("string")
    })
    test('Returning cat object with dequeue with pref of cat', () => {
        const as = new AnimalShelter()
        as.enqueue(animal_2)
        const result = as.dequeue("cat");
        expect(typeof result).toEqual("object")
        expect(result.species).toEqual("cat")
        expect(typeof result.name).toEqual("string")
    })
    test('Returning null when pref is neither dog or cat', () => {
        const as = new AnimalShelter()
        as.enqueue(animal_1)
        as.enqueue(animal_2)
        const result = as.dequeue();
        expect(result).toEqual(null);
    })
})