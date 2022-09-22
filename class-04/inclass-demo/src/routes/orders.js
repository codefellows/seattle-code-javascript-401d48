'use strict';

const express = require('express');
const { ordersInterface } = require('../models');

const router = express.Router();

router.post('/orders', async (req, res, send) => {
  console.log('req body', req.body);

  const newOrder = await ordersInterface.create(req.body);
  res.status(200).send(newOrder);
});

// get all 
router.get('/orders', async (req, res, next) => {
  let orders = await ordersInterface.read();
  res.status(200).send(orders);
});

// get one
router.get('/orders/:id', async (req, res, next) => {
  let { id } = req.params;
  // console.log('my id is', id);

  let order = await ordersInterface.read(id);
  res.status(200).send(order);
});

module.exports = router;
