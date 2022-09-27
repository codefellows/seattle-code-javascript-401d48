'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  /**
   * add a node to the END of the linked list
   * @param {*} value 
   */
  add(value){
    const node = new Node(value);

    // if there is no head, assign the new node to the head property
    if(!this.head){
      this.head = node;
      return;
    }
    // traverse the linked list and add our new node to the end
    let current = this.head;

    // choosing current.next ON PURPOSE.  
    // when current.next is null, I will reassign the new node
    while(current.next){
      current = current.next
    }
    //at this point next is null and we reassign the new node
    current.next = node
  }

  traverse(){
    // we start traversals at the linked list head.  always
    let current = this.head;
    while(current){
      // when I traverse, I likely need to "do the thing"
      console.log(current.value);
      current = current.next
    }
  }

  traverseWithCallback(callback){
    // we start traversals at the linked list head.  always
    let current = this.head;
    while(current){
      // when I traverse, I likely need to "do the thing"
      callback(current.value);
      current = current.next
    }
  }

  // add node to FRONT of linked list
  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value){
    let result = false

    let current = this.head;
    while(current){
      if(current.value === value) result = true;
      current = current.next
    }

    return result;
  }

  toString(){
    let str = '';
    let current = this.head;
    while (current){
      str += `{ ${current.value} } -> `;
      current = current.next
    }
    str += 'NULL';
    return str;
  }
}


let list = new LinkedList();
console.log('empty list', list);

// add head to list
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

// hurts these eyes, but it looks like a series of nested objects
// console.log('populated list', JSON.stringify(list));

list.traverse();
// list.traverseWithCallback(console.log);
console.log('include result', list.includes(3));
console.log(list.toString());
// list.traverseWithCallback(logger);


function logger(value){
  console.log(`Node Value: ${value}`);
}

module.exports = LinkedList;
