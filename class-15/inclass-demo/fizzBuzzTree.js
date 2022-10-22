'use strict';

const { KaryNode, KaryTree } = require('./tree');

function fizzBuzzTree (originalTree){
  let newTree = new KaryTree();

  function fizzBuzzify(value){
    let newValue;
    if(value % 15 === 0){ 
      newValue = 'FizzBuzz';
    } else if(value % 3 === 0){
      newValue = 'Fizz';
    } else if(value % 5 === 0) {
      newValue = 'Buzz';
    } else {
      newValue = `${value}`
    }
    return new KaryNode(newValue, 3)
  }

  newTree.root = fizzBuzzify(originalTree.root.value);

  function traverse(originalNode, newNode){
      for (let i = 0; i < originalNode.children.length; i++){
        newNode.children[i] = fizzBuzzify(originalNode.children[i].value);
        traverse(originalNode.children[i], newNode.children[i])
      }
  }

  traverse(originalTree.root, newTree.root);
  return newTree;
}

let karyTree = new KaryTree();
karyTree.root = new KaryNode(10, 3);
karyTree.root.children[0] = new KaryNode(5, 3);
karyTree.root.children[1] = new KaryNode(4, 3);
karyTree.root.children[2] = new KaryNode(1, 3);
karyTree.root.children[0].children[0] = new KaryNode(15, 3);
karyTree.root.children[0].children[1] = new KaryNode(5, 3);
karyTree.root.children[0].children[2] = new KaryNode(8, 3);
karyTree.root.children[2].children[0] = new KaryNode(3, 3);
karyTree.root.children[2].children[1] = new KaryNode(17, 3);

// console.log(JSON.stringify(karyTree));

let newTree = fizzBuzzTree(karyTree);
console.log(JSON.stringify(newTree));


