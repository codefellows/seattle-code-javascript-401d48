'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002');

const createHandleMessage = require('./handleMessage');
const handleMessage = createHandleMessage(socket);

socket.on('MESSAGE', handleMessage);
