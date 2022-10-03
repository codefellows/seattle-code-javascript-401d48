'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) =>  {
  setTimeout(() => {
    console.log('Pupils: Dilation Update!', payload)
    // console.log('Brain: Brightness changed!! ',)
    
  }, 1000);
}
