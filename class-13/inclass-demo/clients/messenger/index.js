'use strict';

// const { io } = require('socket.io-client');
const MessageClient = require('../lib/messageClient');
const Chance = require('chance');
const messenger = new MessageClient('messages');
// const createSendMessage = require('./sendMessage');
// const handleReceived = require('./handleReceived');

// const socket = io('http://localhost:3002/messages');

const chance = new Chance();

// const sendMessage = createSendMessage(socket);

// socket.on('RECEIVED', handleReceived);
messenger.subscribe('RECEIVED', (payload) => {
  console.log(`confirmed "${payload.text}" message received`);
});

setInterval(() => {
  let text = `Hi ${chance.first()}`;
  console.log('message sent: ', text);
  messenger.publish('MESSAGE', {messageId: chance.guid(), text});

}, 3000);
