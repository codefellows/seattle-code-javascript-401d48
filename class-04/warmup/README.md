# Warm Up

## `reduce()` method

Input: 3 arguments: An array, a callback and the initial value for the "accumulator" state object.

A "reducer" function is a pure function, that returns a new "state" object.

The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The callback receives `accumulator` state, `value` and `index` as parameters.

- Run the callback for each element in the array.
- Return the accumulator with each iteration as input to the next iteration.
- Return the accumulated value as the final return of the function

```javascript
let array = [1,2,3,4];
let state = 0;
let sum = reduce(array, (accumulator, val, idx) => {
  accumulator = accumulator + val;
  return accumulator;
}, state);

// Output: 10
```
