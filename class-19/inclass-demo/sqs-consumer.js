'use strict';

// DO THIS FIRST.  message can be in flight for  a while...

// const { Consumer } = require('sqs-consumer');


// const app = Consumer.create({
//   queueUrl: 'https://sqs.us-west-2.amazonaws.com/356127598444/messages-test',
//   handleMessage: (data) => {
//     // console.log(data.Body)
//     let body  = JSON.parse(data.Body)
//     console.log(body.Message)
//   },
// });

// app.start();




const { Consumer } = require('sqs-consumer');
const { Producer } = require('sqs-producer');
const Chance = require('chance');
const chance = new Chance();

const producer = Producer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/356127598444/delivered.fifo',
  region: 'us-west-2',
});

async function confirmDelivery(data) {

  let { Message } = JSON.parse(data.Body)
  let messageString = JSON.stringify(Message);

  const payload = {
    id: chance.guid(),
    body: messageString,
    groupId: 'sqs-consumer',
    deduplicationId: chance.guid(),
  };

  try {
    let response = await producer.send(payload);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}


const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/356127598444/messages-test',
  handleMessage: confirmDelivery,
});

app.start();

