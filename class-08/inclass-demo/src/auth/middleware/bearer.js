'use strict';

const { UsersModel } = require('../models/user-model');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    next('Invalid Login');
  } else {
    try {
      let token = req.headers.authorization.split(' ').pop();
      // console.log('from bearer middleware', token);

      // demo mistake... oops.  "this" has no context, AND await was missing
      // let validUser =  this.authenticateBearer(token);
      let validUser =  await UsersModel.authenticateBearer(token);
      if (validUser){
        // console.log('in valid user', validUser);
        req.user = validUser;
        req.token = validUser.token;
        next();
      }
    } catch (e){
      console.error(e);
      next(e.message);
    }
  }
};

