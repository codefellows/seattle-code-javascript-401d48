'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    // in javascript this WORKS!
    this.children = [];
    // other languages maybe - also, this is valid JavaScript
    // this.children = new Array(k).fill(null);
  }
}

class KaryTree {
  constructor(){
    this.root = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {  // THIS TRAVERSAL - learn to traverse like you learned linked list... MUSCLE MEMORY

    // recursive helper function
    const traverse = (node) => {
      // base case - DO THE THING
      console.log(node.value);

      // recursive cases  ONE WAY
      // looks left if there is left node and serves as an "eject" if no left node exists
      if (node.left) {
        traverse(node.left);
      }

      // looks right if there is right node and serves as an "eject" if no right node exists
      if (node.right) {
        traverse(node.right);
      }

      // // recursive cases  ANOTHER WAY
      // if (node.left) traverse(node.left);
      // if (node.right) traverse(node.right);
    }

    // start the recursive "party"
    traverse(this.root);
  }

  inOrder(){

    // define recursive function
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      // do thing IN ORDER
      console.log(node.value);
      if (node.right) traverse(node.right);
    }
    // get the recursive party started
    traverse(this.root);
  }

  postOrder(){

    // define recursive function
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      // do thing POST ORDER
      console.log(node.value);
    }
    // get the recursive party started
    traverse(this.root);
  }

  // breadth first traversal approach

}

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

// expect console logs in specific order:  10, 5, 1, 8, 15, 17
// tree.preOrder();

// expect output of 1, 5, 8, 10, 15, 17
// tree.inOrder();

// expect output of 1, 8, 5, 17, 15, 10
tree.postOrder();

module.exports = { KaryNode, KaryTree };
