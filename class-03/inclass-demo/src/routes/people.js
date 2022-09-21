'use strict';

const express = require('express');
const { PeopleModel } = require('../models');

const router = express.Router();

router.post('/people', async (req, res, send) => {
  console.log('req body', req.body);

  const newPerson = await PeopleModel.create(req.body);
  res.status(200).send(newPerson);
});

module.exports = router;
