'use strict';

function mergeSort(items, compare){
  // lists of length 0 and 1 don't need sorting so stop cutting the merge sort in half

  // the default sort is smallest to largest
  compare = compare ? compare : (a, b) => a < b;

  // console.log('items', items)
  if (items.length < 2) return items
  let middle = Math.floor(items.length / 2);
  // cut the list into 2 halves
  let left = items.slice(0, middle);
  let right = items.slice(middle);

  // creating a helper function called merge to help put things back together...
  // merge will not run until both mergeSorts (from our recursion) calls have returned
  // and they (recursive cases) won't return until it cuts the lists down to a length of one
  return merge(mergeSort(left, compare), mergeSort(right, compare), compare)
}

function merge(left, right, compare){
  // console.log('left', left, 'right', right);

  let result = [];
  while(left.length || right.length){
    if (!left.length){
      result.push(right.shift())
      continue;
    }
    if (!right.length){
      result.push(left.shift());
      continue;
    }
    if(compare(left[0], right[0])){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // console.log('result', result);
  return result.concat(left).concat(right);
}

module.exports  = mergeSort;
