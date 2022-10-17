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

    let removedValue = this.top.value;
    if (this.top){
      this.top = this.top.next;
    }
    return removedValue;
  }

  peek(){
    return this.top.value;
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
    let removedValue;
    if (this.front){
      removedValue = this.front.value;
      if (this.front === this.back){
        this.back = null;
      }
      this.front = this.front.next;
    }
    return removedValue;
  }

  peek(){
    this.front.value; 
  }

  isEmpty(){
    return this.front === null;
  }
}

module.exports = { Queue, Stack };
