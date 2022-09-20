'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const stamper = require('./middleware/stamper');

const PORT = process.env.PORT || 3002;

// design principle:  singleton
const app = express();

app.use(stamper);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});

app.get('/pet', (req, res, next) => {
  let { petName } = req.query;
  // console.log('petName', petName);

  try{
    if (petName){
      res.status(200).send(`${petName} is awesome`);
    } else {
      res.status(200).send('What a great animal companion');
    }
  } catch(err){
    next(err.message);
  }
});

app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start};


/**
 * JSDoc example
 * @param {string} name 
 * @returns a greeting message
 */
function greet(name){
  return `Hello ${name}!`;
}

greet('Lucky');
