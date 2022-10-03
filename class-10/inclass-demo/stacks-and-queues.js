'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop(){
    // remove a node from the list
    // what does this return AND
    // what happens to top?  reassigned?  what about if stack is empty
  }

  peek(){
    // leaving intentionally for you
  }

  isEmpty(){
    return this.top === null
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value){
    let newNode = new Node(value);
    if(this.front){
      this.back.next = newNode
    } else {
      this.front = newNode
    }
    this.back = newNode
  }

  dequeue(){
    // leave this to you all
    // if front maybe use a temp variable
    //  mindful of the new front and the back.
    // if queue is left empty, is back null?
    // what does this return
  }

  peek(){
    // value at the front 
  }

  isEmpty(){
    // return Boolean 
  }
}

