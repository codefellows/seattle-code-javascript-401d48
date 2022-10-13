'use strict';

const AWS = require('aws-sdk');

const { Consumer } = require('sqs-consumer');


// credentials can also be added here.  keep them safe maybe in cofig folder or .env!!!
AWS.config.update({ region: 'us-west-2' });

const message = process.argv[2];

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:356127598444:message-test';

const payload = {
  Message: message,
  TopicArn: topic,
}

// either
// sns.publish(payload, (err, daat) => {
//   if (err){
//     console.error(err);
//   }
//   console.log(data)
// })

//or
sns.publish(payload).promise()
  .then(data => console.log(data))
  .catch(err => console.log(err));

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/356127598444/delivered.fifo',
  handleMessage: (data) => {
    console.log('I am here');
    let body = JSON.parse(data.Body)
    console.log('Iamhere', body)
    console.log('Message Recieved: ', body)
  },
});

app.start();

