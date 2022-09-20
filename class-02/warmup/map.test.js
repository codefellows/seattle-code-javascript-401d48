'use strict';

const map = require('./map.js');

describe('Map function', () => {

  it('Works as expected', () => {
    let arr = [1, 2, 3, 4];
    const result = map(arr, (val,idx) => {
      return val * val;
    });

    expect(result).toEqual([1,4,9,16])
  });

  it('returns an array with same length of input array', () => {
    let arr = [1, 2, 3, 4];
    const result = map(arr, (val,idx) => {
      return val * val;
    });
    expect(arr.length).toEqual(result.length);
  });
});
