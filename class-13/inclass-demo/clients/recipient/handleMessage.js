'use strict';

module.exports = (socket) => (payload) => {
  console.log('Message Received!', payload);
  socket.emit('RECEIVED', payload);
};
