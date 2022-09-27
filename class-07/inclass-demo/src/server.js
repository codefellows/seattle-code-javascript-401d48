'use strict';

// 3rd party requirements
const express = require('express');
const authRouter = require('./auth/router');
const basicAuth = require('./auth/middleware/basic');
const bearerAuth= require('./auth/middleware/bearer');
const { UsersModel } = require('./auth/models/user-model');
const app = express();
const PORT = process.env.PORT || 3002;


// Allow us to access request body json
app.use(express.json());

// Process FORM input and add to request body
app.use(express.urlencoded({ extended: true }));
app.use(authRouter);





// define a hello route that uses basic auth to safeguard response content
app.get('/hello', basicAuth, (req, res, next) => {
  let { name } = req.query;
  res.status(200).send(`Greetings ${name}! this route is now secured by Basic AUth!!!`);
});

app.get('/users', bearerAuth, async (req, res, next) => {
  console.log('from the users get route', req.user);
  let user = await UsersModel.findAll();
  // use ris an unresolved promise that contains
  let payload = {
    results: user,
  };

  res.status(200).send(payload);

});

// export app for testing, start ability to run app, and our db with ORM
module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('server running on', PORT)),
};
