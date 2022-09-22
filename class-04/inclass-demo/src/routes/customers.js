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

// not required for lab
router.get('/customerWithOrders/:id', async (req, res, next) => {
  let { id } = req.params;
  let query = {
    where: { id },
    include: ordersInterface.model,
  };
  // this is how it SHOULD work without interface
  // let query = {
  //   where: { id },
  //   include: OrderModel,
  // };
  // let customerWithOrders = await CustomersModel.findOne(query);

  let customerWithOrders = await customersInterface.readWithRelations(query);
  res.status(200).send(customerWithOrders);
});

// update
// router.put('/customers/:id', async (req, res, next) => {
//   let { id } = req.params;

//   // update the record - ideally ALL information is in req.body
//   await CustomersModel.update(req.body, {where: {id}});

//   // get the updated record and return that to the client (optional)
//   let customer = await CustomersModel.findOne({where: {id}});
//   res.status(200).send(customer);

// });

// // delete
// router.delete('/customers/:id', async (req, res, next) => {
//   let { id } = req.params;

//   await CustomersModel.destroy({where: {id}});
//   res.status(200).send('Customer Deleted');
// });

module.exports = router;
