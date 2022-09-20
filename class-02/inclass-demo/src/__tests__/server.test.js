'use strict';

const supertest = require('supertest');
const { app } = require('../server');
const request = supertest(app);

describe('API Server', () => {

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(404);
  });

  it('handles errors', async () => {
    const response = await request.get('/bad');

    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
    expect(response.body.message).toEqual('this is a bad route');
  });

  it('handles root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Hello World');
  });

  it('handles \'/pet\' route without query param correctly', async () => {
    const response = await request.get('/pet');

    expect(response.text).toEqual('What a great animal companion');
  });

  it('handles \'/pet\' route with query param correctly', async () => {
    const response = await request.get('/pet').query({petName: 'Lucky'});

    expect(response.text).toEqual('Lucky is awesome');
  });
});
