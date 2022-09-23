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
    let responseOne = await request.post('/customers').send({
      name: 'tester',
      age: 42,
      pronouns: 'they/them',
    });
    let responseTwo = await request.post('/customers').send({
      name: 'MrTester',
      age: 42,
      pronouns: 'he/him',
    });

    expect(responseOne.status).toEqual(200);
    expect(responseOne.body.name).toEqual('tester');
    expect(responseOne.body.age).toEqual(42);
    expect(responseOne.body.pronouns).toEqual('they/them');
    expect(responseTwo.status).toEqual(200);
    expect(responseTwo.body.name).toEqual('MrTester');
    expect(responseTwo.body.age).toEqual(42);
    expect(responseTwo.body.pronouns).toEqual('he/him');
  });

  test('Reads all customers', async () => {
    let response = await request.get('/customers');
    console.log('should have two records', response.body);
    expect(response.body.length).toBe(2);
    expect(response.body[0].name).toEqual('tester');
    expect(response.body[0].age).toEqual(42);
    expect(response.body[0].pronouns).toEqual('they/them');
    expect(response.body[1].name).toEqual('MrTester');
    expect(response.body[1].age).toEqual(42);
    expect(response.body[1].pronouns).toEqual('he/him');

  });

  test('Reads a single customer', async () => {
    let response = await request.get('/customers/1');

    expect(response.body.name).toEqual('tester');
    expect(response.body.age).toEqual(42);
    expect(response.body.pronouns).toEqual('they/them');
  });

  test('Updates a customer', async () => {
    let response = await request.put('/customers/1').send({
      name: 'testy',
      age: 42,
      pronouns: 'they/them',
    });

    expect(response.body.name).toEqual('testy');
    expect(response.body.age).toEqual(42);
    expect(response.body.pronouns).toEqual('they/them');
  });

  test('Delete a customer', async () => {
    await request.delete('/customers/1');
    let response = await request.get('/customers');
    console.log('should have one record', response.body);

    expect(response.body.length).toBe(1);
    expect(response.body[0].name).toEqual('MrTester');
    expect(response.body[0].age).toEqual(42);
    expect(response.body[0].pronouns).toEqual('he/him');
  });
});
