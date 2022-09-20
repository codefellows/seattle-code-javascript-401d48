'use strict';

// when testing logger, how do I test that a console happened and logged correctly?  how do I spy on the console?

const stamper = require('../middleware/stamper');

describe('Stamper Middleware', () => {

  it('works as expected', async () => {

    // mock all the parameters needed for stamper to work properly
    let req = {};
    let res = {};
    let next = jest.fn();

    // call stamper, and we can confirm functionality
    stamper(req, res, next);
    console.log(req.time);
    expect(req.time).toBeTruthy();
    expect(next).toHaveBeenCalled();
  });
});
