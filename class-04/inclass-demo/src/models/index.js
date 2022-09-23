'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const customersSchema = require('./customers.schema');
const ordersSchema = require('./orders.schema');
const ModelInterface = require('./modelInterface');

// 'postgres://localhost:5432/d48-d8-api-app'
// 'postgres://username:password@localhost:5432/d48-d8-api-app'
// ternary:  WTF  what(conditional) ? return if TRUE : else return if FALSE
const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite::memory' 
  : process.env.DATABASE_URL;

// instantiates our database
const sequelizeDatabase = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

//create CustomersModel with our Schema
const CustomersModel = customersSchema(sequelizeDatabase, DataTypes);
const OrdersModel = ordersSchema(sequelizeDatabase, DataTypes);

CustomersModel.hasMany(OrdersModel);
OrdersModel.belongsTo(CustomersModel);

module.exports = {
  sequelizeDatabase, 
  customersInterface: new ModelInterface(CustomersModel),
  ordersInterface: new ModelInterface(OrdersModel),
};

