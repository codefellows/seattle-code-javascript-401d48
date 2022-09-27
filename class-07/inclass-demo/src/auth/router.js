'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { UsersModel } = require('./models/user-model');
const basicAuth = require('./middleware/basic');

// define a signup route to Create new user in database
router.post('/signup', async (req, res, next) => {
  console.log('I am here');
  try {
    let { username, password } = req.body;
    let encryptedPassword = await bcrypt.hash(password, 5);

    let user = await UsersModel.create({
      username,
      password: encryptedPassword,
    });

    res.status(200).send(user);
  } catch (err) {
    next('signup error occurred');
  }
});

//define a signin route to Returns user object to client (confirm user auth)
router.post('/signin', basicAuth, (req, res, next) => {
  res.status(200).send(req.user);
});

module.exports = router;
