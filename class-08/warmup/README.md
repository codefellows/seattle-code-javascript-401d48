# Warm Up

## Traversing a Linked List and More!

> Linked List are our newest learned data structures.  The best way to gain familiarity with traversing linked is by doing

Write a function that accepts as parameters: 
1. a linked list (where all the nodes contain a number value for this use case)
1. a callback function to interact with each node.  

The function should traverse through a linked list, and deliver each node to the callback function parameter for processing.  After traversing through the entire linked list, return the same linked list.  Note:  depending on the callback, the linked list will likely in some way be changed. 

### Example Callback:
```javascript
let callback = (node) => node.value * node.value;
```
As a class, we will talk discuss the problem domain and the visualization.

Provide a working algorithm.  If you have time, begin writing code.  DO NOT write code before writing down your algorithm!


## Algorithm

- declare a function (let's use a method on the LinkedList Class) that takes in the linked list and callback
- traverse LinkedList
  - identify head
  - at each node, pass in the node and use callback
  - reassign node value to the node
  - move from current node to next node
- when there is no next node - traversal is finished, return linked List

## Solution with callback modified

[Solution Repl](https://replit.com/@rkgallaway/linkedlist-traversal-warmup-08-solution#index.js)
