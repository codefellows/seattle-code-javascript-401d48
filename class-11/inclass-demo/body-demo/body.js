'use strict';

const eventPool = require('./eventPool');
const brainHandler = require('./brain/brainHandler');
const eyeHandler = require('./eyes/eyeHandler');
const handHandler = require('./hand/handHandler');
const pupilHandler = require('./pupils/pupilHandler');

eventPool.on('SUNLIGHT', eyeHandler);
eventPool.on('BRIGHTNESS', brainHandler);
eventPool.on('DILATION', pupilHandler);
eventPool.on('SHIELD_EYES', handHandler);


setInterval(() => {
  console.log('---------new interval begins---------');
  const brightness = Math.floor(Math.random() * 100)
  // note: emitting sunlight event here for lack of a "more complicated" palce to do so
  console.log(`The sun shines with brightness level  ${brightness}`);
  eventPool.emit('SUNLIGHT', {  brightness })
}, 5000)
