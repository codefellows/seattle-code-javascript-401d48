'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) =>  {
  setTimeout(() => {
    console.log(`Eyes:: We see brightness of ${payload.brightness}, tell the brain!` );
    eventPool.emit('BRIGHTNESS', payload)
    // console.log('Brain: Brightness changed!! ',)
  }, 1000);
}
