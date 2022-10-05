'use strict';

const uuid = require('uuid').v4;
const io = require('socket.io')(3002);

const queue = {
  chores: {},
}

const family = io.of('/family');

family.on('connection', (socket) => {
  console.log('joined the /family namespace: ', socket.id);

  socket.on('NEW_CHORE', (payload) => {
    let id = uuid();
    queue.chores[id] = payload;
    // is this being used??
    // socket.emit('ADDED');
    // why use family instead of socket?  tell the whole family if subscribed
    family.emit('CHORE', {id, chore: payload});
  });

  socket.on('GETALL', (payload) => {
    Object.keys(queue.chores).forEach(id => {
      console.log('queued chore accessed', {id, chore: queue.chores[id]});
      socket.emit('CHORE', {id, chore: queue.chores[id]})
    })
  });

  socket.on('RECEIVED', (payload) => {
    delete queue.chores[payload.id];
  });

})
