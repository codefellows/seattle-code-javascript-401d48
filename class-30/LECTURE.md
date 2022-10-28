# Hashmaps

## Review

### Linked List

Why Would we use a Linked List?  IT'S LINEAR

- browser forward and backward
- want to store some information and have no rules about insertion or removal

### Stack or Queue

Why would we use?  FILO or FIFO expectations for removing or using data

### Binary Tree

Why would we use?  hierarchical

- file structure (K-ary tree)
- DOM (K-ary tree)

### Binary Search Tree

Why would we use?  sorted numbers

- cuts run time in half with EVERY MOVE  Big O of time is O(log n)  opposite of O (x^2)

## HashMap

> you may hear HashTable, Table, HashMap, or Map  -- takeaway:  collisions allowed

>you may ALSO hear HashSet or Set -- takeaway: NO collisions

### What is a HashMap?

A structure (array in js) that stores key value pairs

- Robert Ball:  an "array" that stores keys aligned to certain index in that array itself.
- Stephen C: mechanism to assign an index to a key with possible collisions stored within a linked list
- Daniel: index is NOT arbitrarily assigned.  it is "hashed" consistently and stored in an array of a predetermined length with room for an index we might encounter.  

Note: if we have a perfect Hashing system for our table or map, the only collisions we'd have would be actual duplicates

### Why?  How is this useful?

- hashing adds security - true, as far as the structure itself...  other benefits:
- PERFORMANT LOOKUP
- constant O(1);

Key (what can we "hash") - in many languages, I would think "primitive for a hashtable/hashmap
- Stringified thing
  - an object (stringified)
  - any primitive - stringified
  - a function

### Terminology

- Hashing: pass in a STRING, RETURN A HASHED STRING AS A NUMBER.  THE "number" translates to a specific or "deterministic" place within our structure
    - we will write our hashing mechanism, 3rd party could be great too...
    - Languages have some sort of hashtable/hashmap built in (Map in javascript)

- Collision: if keys map to the same location in our structure, we call that a collision.  
    - the more perfect the hash, the less likely we are to have collisions

- Bucket: a linked list (structure) built at the index in our structure to hold multiple keys (collisions);

### Hashing Algorithm

The goal is to input a key, and output a location in our HashTable (structure)

- decide the "size".  how many buckets, how many indexes in the array `1024`
- turn the key into a string 
  - Convert string characters into ASCII values
  - Sum all of the ASCII values
  - multiply our sum by a "large" prime number `599`
  - take that product and get the `%` (modulo) when divided by the number of buckets

  example:
  ```javascript
  `ASCII sum of 'Ryan'` = 410.
  410 * 599 = 245590
  245590 % 1024 = 854
  // 'Ryan' would hash to a location of 854
  ```


