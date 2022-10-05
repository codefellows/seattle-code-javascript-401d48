'use strict';

class Queue{
  constructor(){
    this.data = {};
  }

  store(key, value){
    this.data[key] = value;
    // might look something like this:
    // this.key.banana = 'mmmm banana';
    return key;
  }

  read(key){
    return this.data[key];
  }

  remove(key){
    console.log('something got removed');
    let value = this.data[key];
    delete this.data[key];
    return value;
  }
}

module.exports = Queue;
