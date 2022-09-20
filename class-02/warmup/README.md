# Warm Up

## `map()` method

Takes 2 arguments: An array and a callback function.

The map() method creates a new array populated with the results of calling a provided function on every element in the input array.

The input should be an array of any values and a callback function that receives `value` and `index` as parameters.

- Return a new array, filled with the return value of running that callback on each element

```javascript
let array = [1,2,3,4];
map(array, (val,idx) => {
  return val * val;
});

// [1,4,9,16]
```
