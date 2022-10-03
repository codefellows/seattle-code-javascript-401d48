'use strict';

const Event = require('events');

// event singleton.  having a SINGLE event context is important
const eventPool = new Event();

// client list
function ryansPhone() {
  console.log('sending message');

  // creating a  payload to be emitted
  const payload = {text: 'You\'ve Got This!'}

  // .emit() takes 2 args.  eventname as a string, payload
  eventPool.emit('SEND_MESSAGE', payload);
  // console.log('message was sent');
}

function elainesPhone(payload) {
  // simulating async
  setTimeout(() => {
    console.log('Message received by Elaine::', payload);
    // Elaine could ALSO emit an event to the event pool
    // CRUD or REST operations could happen.
    // more complex process could of course happen
    
  }, 1000);
}

function brandonPsPhone(payload) {
  setTimeout(() => {
    console.log('Message received by Brandon P::', payload);
    
  }, 500);
}

// client subscribe with .on(), taking 2 args:  eventname as a string, callback
eventPool.on('SEND_MESSAGE', elainesPhone);
eventPool.on('SEND_MESSAGE', brandonPsPhone);

// fires code every so often
setInterval(() => {
  ryansPhone();
}, 2000);
