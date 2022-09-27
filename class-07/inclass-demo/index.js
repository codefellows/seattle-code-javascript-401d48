'use strict';

let { start } = require('./src/server');
let { sequelizeDatabase } = require('./src/auth/models/user-model');

sequelizeDatabase.sync()
  .then(() => {
    console.log('successfully connected');
    start();
  })
  .catch((e) => console.error(e));
