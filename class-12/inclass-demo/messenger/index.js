'use strict';

const { io } = require('socket.io-client');
const Chance = require('chance');
const createSendMessage = require('./sendMessage');
const handleReceived = require('./handleReceived');

const socket = io('http://localhost:3002');

const chance = new Chance();

const sendMessage = createSendMessage(socket);

socket.on('RECEIVED', handleReceived);

setInterval(() => {
  sendMessage(`Hi ${chance.first()}`);
}, 3000);
