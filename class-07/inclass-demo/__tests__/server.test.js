'use strict';

const supertest = require('supertest');
// once refactored, your sequelizeDatabase should live somewhere else and need a different import.  maybe same places as shown below?
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/auth/models/user-model');
const request = supertest(app); 


// beforeAll(async () => {
//   await sequelizeDatabase.sync();
// });

// afterAll(async () => {
//   await sequelizeDatabase.drop();
// });

// TODO: replace or delete failing test to deploy successfully
// to write basic non auth tests for server is best practice
// your lab ONLY requires auth tests.  
// you have been shown how to write other tests
// RECOMMEND: practice here if time permits
// STRONG RECOMMEND:  change string language! 
describe('Passing and Failing Intentionally', () => {

  test('Test passes when true', async () => {
    expect(true).toBeTruthy();
  });
});
