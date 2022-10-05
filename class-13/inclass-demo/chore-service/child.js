'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/family');

// events to manage GETALL, CHORE, RECEIVED

socket.emit('GETALL')

socket.on('CHORE', (payload) => {
  // console.log('this is the payload', payload)
  console.log('I have to do this chore: ', payload.chore);
  socket.emit('RECEIVED', payload)
})
