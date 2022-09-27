'use strict';

const basicAuth = require('../src/auth/middleware/basic');
const { sequelizeDatabase, UsersModel } = require('../src/auth/models/user-model');

let user = {
  username: 'tester',
  password: 'pass',
};


beforeAll (async () => {
  await sequelizeDatabase.sync();
  await UsersModel.create(user);
});

afterAll (async () => {
  await sequelizeDatabase.drop();
  // if tests aren't passing maybe its a multiple - async issue
  await sequelizeDatabase.close();
});

describe('Basic Auth Middleware Tests', () => {

  // Basic dGVzdDpwYXNz
  test('test /signin route fails appropriately', () => {
    // unit test of basic auth only
    let req = {
      headers: {
        authorization: 'Basic banana',
      },
    };
    let res = {};
    let next = jest.fn();

    basicAuth(req, res, next)
      .then(() => {
        expect(next).toHaveBeenCalledWith('Not Authorized');
      });

  });
  test('passes appropriately', () => {
    let req = {
      headers: {
        authorization: 'Basic dGVzdDpwYXNz',
      },
    };
    let res = {};
    let next = jest.fn();

    basicAuth(req, res, next)
      .then(() => {
        expect(next).toHaveBeenCalledWith();
      });
  });
});
