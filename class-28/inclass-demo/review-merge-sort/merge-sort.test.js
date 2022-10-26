'use strict';

const mergeSort = require('./merge-sort');

describe('Merge Sort Tests', () => {
  test('Can sort an array length of 1', () => {
    let arr = [1];
    expect(mergeSort(arr)).toEqual(arr.sort())
  })
  test('Can sort an array length of 2', () => {
    let arr = [1, 2];
    expect(mergeSort(arr)).toEqual(arr.sort())
  })
  test('Can sort an array length of 3', () => {
    let arr = [1, 3, 2, 5, 9, 4];
    let expected = [1, 2, 3, 4, 5, 9]
    expect(mergeSort(arr)).toEqual(expected)
  })
  test('Can sort an array length of n', () => {
    let arr = [];
    for(let i = 1; i <= 10; i++){arr.push(Math.floor(Math.random() * 10))}
    console.log('arr', arr)
    expect(mergeSort(arr)).toEqual(arr.sort())
  })
})
