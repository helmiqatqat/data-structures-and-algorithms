const Linkedlist = require('../linked-list-general/index');

class Hashtable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  set(key, value) {
    const hashIndex = this.hash(key);
    if (!this.map[hashIndex]) {
      this.map[hashIndex] = new Linkedlist();
    }
    this.map[hashIndex].append({ [key]: value });
  }
  get(key) {
    const hashIndex = this.hash(key);
    const list = this.map[hashIndex];
    if (list) {
      let pointer = list.head;
      do {
        if (pointer.value.hasOwnProperty(key)) return pointer.value[key];
        pointer = pointer.next;
      } while (pointer);
      return 'Key does not exist';
    } else return 'Key does not exist';
  }
  has(key) {
    const hashIndex = this.hash(key);
    const list = this.map[hashIndex];
    if (list) {
      let pointer = list.head;
      while (pointer) {
        if (pointer.value.hasOwnProperty(key)) return true;
        pointer = pointer.next;
      }
      return false;
    } else return false;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.size; i++) {
      if (this.map[i]) {
        let pointer = this.map[i].head;
        do {
          keysArr.push(Object.keys(pointer.value)[0]);
          pointer = pointer.next;
        } while (pointer);
      }
    }
    return keysArr;
  }
  hash(key) {
    let sum = 0;
    let keyChars = key.split('');
    for (let char of keyChars) {
      sum += char.charCodeAt();
    }
    return (sum * 599) % this.size;
  }
}

module.exports = Hashtable;
