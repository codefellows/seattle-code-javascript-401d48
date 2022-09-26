'use strict';

let { start, sequelizeDatabase} = require('./src/server');

sequelizeDatabase.sync()
  .then(() => {
    console.log('successfully connected');
    start();
  })
  .catch((e) => console.error(e));
