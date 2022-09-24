# Linked Lists and Big O

##  Big O (big oh)

Big O(oh) notation is used to describe the efficiency of an algorithm or function. This efficiency is evaluated based on 2 factors:  space and time

1. Run Time (also known as time efficiency / complexity) the amount of time something takes complete
1. Memory Space (also known as space efficiency / complexity).  The amount of memory resources used to store data and instructions
1. Constant: O(1) - example:  we don't another data structure, or we create one variable and keep (re)assigning values to that same variable
1. Linear:  O(n) - time example:  iterating or traversing a certain number times.  space example: creating an element in an array a certain number of times (creating something new - space).
1. exponential:  O(n^2) - double nested for loop
1. logarithmic: O(log n)  - cut number of n in half each iteration
1. when navigating trees O(h) where h is the height

## Node (for a singly linked list)

An "element" in a linked list.  Consider what are the properties of a node found in a singly linked list.
- Node is a container, an object that holds information and is part of a data structure

Properties:
- next <- initially null, and a next pointer added when another node added to the list
- value <- added when the node is added to the linked list.

## Linked List (singly linked list)

What is a linked list?  Consider what are the properties of a singly linked list

linear collection of nodes.  one node knows about the next node 

Properties: 
head <- first node in a link list.  start at the head to traverse a linked list

## Whiteboard

[today's freehand](https://projects.invisionapp.com/freehand/document/z1oCN1JsS)

## Whiteboard stretch goal:

Write a function that takes in a linked list.  The linked list will contain only integer values.  Multiply each existing node value by itself, change that existing node value to this new value, and return the SAME linked list. 

## Bonus Content - Useful Later

[Function Currying, Based on a 301 Reading](https://replit.com/@rkgallaway/301d82-greaterThan-currying#index.js)
