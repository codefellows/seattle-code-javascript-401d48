'use strict';

const express = require('express');
const { customersInterface, ordersInterface } = require('../models');

const router = express.Router();

router.post('/customers', async (req, res, send) => {
  console.log('req body', req.body);

  const newPerson = await customersInterface.create(req.body);
  res.status(200).send(newPerson);
});

// get all 
router.get('/customers', async (req, res, next) => {
  let customers = await customersInterface.read();
  res.status(200).send(customers);
});

// get one
router.get('/customers/:id', async (req, res, next) => {
  let { id } = req.params;
  // console.log('my id is', id);

  // essentially same thing, different style
  // let customer = await CustomersModel.findOne({where: {id: req.params}});
  let customer = await customersInterface.read(id);
  res.status(200).send(customer);
});

router.get('/customerWithOrders/:id', async (req, res, next) => {
  let { id } = req.params;

  let customerWithOrders = await customersInterface.readManyToOne(id, ordersInterface.model);

  // if CRUD was not extracted this is what this SHOULD look like. untested.
  // let query = {
  //   where: {id},
  //   include: OrderModel,
  // };
  // let customerWithOrders = await CustomerModel.findOne(query);
  res.status(200).send(customerWithOrders);
});

// update
router.put('/customers/:id', async (req, res, next) => {
  let { id } = req.params;

  // update the record - ideally ALL information is in req.body
  // get the updated record and return that to the client (optional)
  let customer = await customersInterface.update(req.body, id);

  res.status(200).send(customer);

});

// // delete
router.delete('/customers/:id', async (req, res, next) => {
  try {
    let { id } = req.params;
  
    let message = await customersInterface.delete(id);
    res.status(200).send(message);
  } catch(err){
    next(err.message);
  }
});

module.exports = router;
