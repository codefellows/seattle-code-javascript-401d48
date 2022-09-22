'use strict';

let logger = require('../src/middleware/logger');

describe('Test Logger Middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); // spy on the next method

  beforeEach(() => {
    // Attach to the console (spy on it or take it over)
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    // put things back to normal.  stop spying
    consoleSpy.mockRestore();
  });

  test('Properly logs output', () => {
    logger(req, res, next);
    console.log('req',req);
    expect(consoleSpy).toHaveBeenCalledWith(`REQUEST: ${req.method}, ${req.originalUrl}`);
  });
  test('Properly calls next()', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
