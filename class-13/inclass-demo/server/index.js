'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const Queue = require('./lib/queue');

// instance of a listening event server at http://localhost:3002
const server = new Server(PORT);
const messages = server.of('/messages');
const messageQueue = new Queue();

// create a namespace
const brightness = server.of('/brightness');

// connect to server 
messages.on('connection', (socket) => {
  console.log('Socket connected to namespace /messages!', socket.id);

  //remember can do socket.onAny to log events

  socket.on('JOIN', (queueId) => {
    socket.join(queueId);
    socket.emit('JOIN', queueId);
  });

  socket.on('MESSAGE', (payload) => {
    console.log('Server MESSAGE event', payload);

    //managing queue
    let currentQueue = messageQueue.read(payload.queueId);
    if (!currentQueue){
      let queueKey = messageQueue.store(payload.queueId, new Queue());
      currentQueue = messageQueue.read(queueKey);
    }
    currentQueue.store(payload.messageId, payload);

    socket.broadcast.emit('MESSAGE', payload); // send to all parties in socket EXCEPT the sender
  });

  socket.on('RECEIVED', (payload) => {
    console.log('Server RECEIVED event', payload);

    // managing queue
    let currentQueue = messageQueue.read(payload.queueId);
    if(!currentQueue){
      throw new Error('no queue created');
    }
    let message = currentQueue.remove(payload.messageId);

    socket.to(payload.queueId).emit('RECEIVED', message);
  });

  socket.on('GET_MESSAGES', (payload) => {
    console.log('This happened');
    let currentQueue = messageQueue.read(payload.queueId);
    if(currentQueue && currentQueue.data){
      Object.keys(currentQueue.data).forEach(messageId => {
        socket.emit('MESSAGE', currentQueue.read(messageId));
      });
    }
  });

});

brightness.on('connection', (socket) => {
  console.log('Socket connected to brightness namespace!', socket.id);

  // how to join a room
  socket.on('JOIN', (room) => {
    console.log(`You've joined the ${room} room`);
    socket.join(room);
  });

  socket.on('SUNLIGHT', (payload) => {
    // OR use socket.any()
    logEvent('SUNLIGHT', payload);
    brightness.emit('SUNLIGHT', payload);
  });
});

function logEvent(event, payload){
  const date = new Date();
  const time = date.toTimeString();
  console.log('EVENT', {event, time, payload});
}
