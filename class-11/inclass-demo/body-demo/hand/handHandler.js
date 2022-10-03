'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) =>  {
  setTimeout(() => {
    console.log('Hand: Shield the eyes!', payload);
    // console.log('Brain: Brightness changed!! ',)
    
  }, 1000);
}
