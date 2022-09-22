'use strict';

const express = require('express');
const customersRouter = require('./routes/customers');
const ordersRouter = require('./routes/orders');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(customersRouter);
app.use(ordersRouter);


function start(){
  app.listen(PORT, () => console.log('listening on port', PORT));
}

module.exports = { app, start };
