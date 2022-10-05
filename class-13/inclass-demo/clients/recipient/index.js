'use strict';

const MessageClient = require('../lib/messageClient');
const recipient = new MessageClient('messages');
// const { io } = require('socket.io-client');
// const socket = io('http://localhost:3002/messages');

// const createHandleMessage = require('./handleMessage');
// const handleMessage = createHandleMessage(socket);

// socket.on('MESSAGE', handleMessage);

recipient.publish('GET_MESSAGES', { queueId: 'messages'});

recipient.subscribe('MESSAGE', (payload) => {
  console.log('received message', payload.text);
  recipient.publish('RECEIVED', payload);
});
