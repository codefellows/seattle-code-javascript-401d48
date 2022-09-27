'use strict';

// const bcrypt = require('bcrypt');
// const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.API_SECRET || 'ThisIsMySecret';

// we'll use this for inclass-demo.  one big monolithic file  
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory' // two colons allows for NO persistance
  : 'sqlite:memory';  // one colon allows us to persist - useful today

// something like this will be used in your ACTUAL project:  
// const DATABASE_URL = process.env.NODE_ENV === 'test'
//   ? 'sqlite::memory'
//   : process.env.DATABASE_URL;

let options = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false,
  },
} : {};

// instantiate database
const sequelizeDatabase = new Sequelize(DATABASE_URL, options);

// Create a Sequelize Model
const UsersModel = sequelizeDatabase.define('Users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.VIRTUAL,
    get(){ // a method that "gets" called on "read"
      return jwt.sign({username: this.username}, SECRET, {expiresIn: 86400000});
    },
    set(){ // a method that runs when set with "="
      return jwt.sign({username: this.username}, SECRET, {expiresIn: 86400000});
    },
  },
});

// Attach beforeCreate Hook to the UserModel.  
// whole point:  know that exists, and play with a hook. we've done that
// UsersModel.beforeCreate((user) => {
//   console.log('our user', user);
// });

// for your own edification.... do we need this maybe / maybe not
UsersModel.authenticateBasic = async (username, password)=> {
  try {
    const user = await this.findOne({where: { username}});
    const valid = await bcrypt.compare(password, user.password);
    if (valid){
      return  user;
    }
  } catch (e) {
    console.error(e);
    return e;
  }
};

UsersModel.authenticateBearer = async (token) => {
  try {
    let payload = jwt.verify(token, SECRET);
    console.log('from authenticateBearer', payload);

    const user = await this.findOne({where: {username: payload.username}});
    if(user){
      return user;
    }
  }catch (e){
    console.error(e);
    return e;
  }
};

module.exports = {
  UsersModel,
  sequelizeDatabase,
};
