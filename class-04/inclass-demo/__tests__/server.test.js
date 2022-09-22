'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('Testing REST API', () => {

  test('handles invalid requests', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(404);
  });

  test('Create a customer', async() => {
    let response = await request.post('/customers').send({
      name: 'tester',
      age: 42,
      pronouns: 'they/them',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tester');
    expect(response.body.age).toEqual(42);
    expect(response.body.pronouns).toEqual('they/them');
  });

  test('Should read from customers', () => {
    expect(true).toBe(false);
  });

  test('Should update a customers', () => {
    expect(true).toBe(false);
  });

  test('Should delete a customers', () => {
    expect(true).toBe(false);
  });
});
