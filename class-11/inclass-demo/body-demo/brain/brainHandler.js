'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) =>  {
  setTimeout(() => {
    // console.log('brain works')
    console.log('Brain: Brightness changed!! ', payload)
    if(payload.brightness > 50){
      eventPool.emit('DILATION', 'close');
      eventPool.emit('SHIELD_EYES', 'use hand to shield eyes from brightness')
    } else {
      eventPool.emit('DILATION', 'open');
    }
  }, 1000);
}
