'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/family');

// event to manage NEW_CHORE


function assignChore(){
  const chores = ['laundry', 'dishes', 'mow the lawn', 'weed garden', 'unload dishwasher', 'homework', 'clean room', 'make bed', 'dust']
  const chore = chores[Math.floor(Math.random() * chores.length)];
  console.log('assign this chore:', chore )
  // emit event in setTimeout aka start the cycle of events
  socket.emit('NEW_CHORE', chore)
}

setInterval(() => {
  assignChore();
}, 3000);
