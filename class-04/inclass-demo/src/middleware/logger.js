'use strict';

function logger (req, res, next){
  console.log(`REQUEST: ${req.method}, ${req.originalUrl}`);
  next();
}

module.exports = logger;
