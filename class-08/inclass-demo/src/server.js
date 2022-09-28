'use strict';

// 3rd party requirements
const express = require('express');
const authRouter = require('./auth/router');
const basicAuth = require('./auth/middleware/basic');
const bearerAuth= require('./auth/middleware/bearer');
const acl = require('./auth/middleware/access-control');
const { UsersModel } = require('./auth/models/user-model');
const app = express();
const PORT = process.env.PORT || 3002;


// Allow us to access request body json
app.use(express.json());

// Process FORM input and add to request body
app.use(express.urlencoded({ extended: true }));
app.use('/api/v2', authRouter);





// define a hello route that uses basic auth to safeguard response content
app.get('/hello', basicAuth, (req, res, next) => {
  let { name } = req.query;
  res.status(200).send(`Greetings ${name}! this route is now secured by Basic AUth!!!`);
});

app.get('/users', bearerAuth, async (req, res, next) => {
  console.log('from the users get route', req.user);
  let user = await UsersModel.findAll();

  // demo mistake: user was an unresolved promise that containing an error.  which is an object.  which evaluates as truthy
  let payload = {
    results: user,
    token: req.token,
  };

  res.status(200).send(payload);

});

app.get('/create', bearerAuth, acl('create'), (req, res, next) => {
  res.status(200).send('I have create permissions');
});

app.get('/update', bearerAuth, acl('update'), (req, res, next) => {
  res.status(200).send('I have update permissions');
});

app.get('/delete', bearerAuth, acl('delete'), (req, res, next) => {
  res.status(200).send('I have delete permissions');
});



// export app for testing, start ability to run app, and our db with ORM
module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('server running on', PORT)),
};
