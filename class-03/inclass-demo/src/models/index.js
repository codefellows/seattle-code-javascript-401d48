'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const peopleSchema = require('./person.schema');

// 'postgres://localhost:5432/d48-d8-api-app'
// 'postgres://username:password@localhost:5432/d48-d8-api-app'
// ternary:  WTF  what(conditional) ? return if TRUE : else return if FALSE
const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite:memory' 
  : process.env.DATABASE_URL;

// instantiates our database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

//create PeopleModel with our Schema
const PeopleModel = peopleSchema(sequelizeDatabase, DataTypes);



module.exports = {sequelizeDatabase, PeopleModel};

