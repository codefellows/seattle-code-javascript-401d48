'use strict';

// requires from the model/index.js file
const { sequelizeDatabase } = require('./src/models');
const { start } = require('./src/server');

//create all associated tables and make sure connection is good
sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection!');
    // here lies danger - inserts every time it is started
    // PeopleModel.create({name: 'Ryan'});
  })
  .catch(err => console.error(err));

start();
