'use strict';

const { UsersModel } = require('../models/user-model');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    next('Invalid Login');
  } else {
    try {
      let token = req.headers.authorization.split(' ').pop();
      console.log('from bearer middleware', token);

      let validUser = UsersModel.authenticateBearer(token);
      if (validUser){
        req.user = validUser;
        next();
      }
    } catch (e){
      console.error(e);
      next(e.message);
    }
  }
};

