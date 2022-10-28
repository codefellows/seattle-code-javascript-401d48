'user strict';

const {LinkedList} = require('./LinkedList');

class HashTable {
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  /**
   * 
   * @param {String} key 
   * @returns 
   */
  hash(key){
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0)


    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  /**
   * 
   * @param {string} key 
   * @param {*} value 
   * storing inside a linked list -- YOUR CODE WILL BE DIFFERENT
   */
  set(key, value){
    let position = this.hash(key);
    // allows me to create a property dynamically from some variable
    let data = {[key]: value}

    // your code different here, no need for a linked list
    // we check if there IS a bucket at the specified position
    // if bucket exists, we add our data
    if(this.buckets[position]){
      let bucket = this.buckets[position];
      bucket.add(data)
    } else {
      // if does not exist, create one
      let bucket = new LinkedList();

      // then add data to the bucket
      bucket.add(data);

      // then add the new bucket to its position in this.buckets array
      this.buckets[position] = bucket;
    }
  }
  get(key){
    let position = this.hash(key);

    // your code will look different here!!!
    if (this.buckets[position]){
      let bucket = this.buckets[position];
      // if i were not allowing collisions, or not replacing values if collision found.... I need to figure out what value is appropriate to return...

      // in this code, I will assume NO COLLISIONS
      let value = bucket.head.value[key];
      return value;
    }
  }

  has(){
    // is it contained in structure?
  }

  keys(){
    // what are the keys
  }
}

let table = new HashTable(1024);

console.log(table);
console.log(table.hash('Ryan'));
console.log(table.hash('Audrey'));
table.set('Ryan', {name: 'Ryan', age: 48});
table.set('Audrey', 'Audrey');
// table.set('Ryan', 'Ryan');
console.log(table);
console.log(JSON.stringify(table.buckets[854]));
console.log(table.get('Ryan'));
console.log(table.get('Audrey'));



