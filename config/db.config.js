const { Sequelize } = require('sequelize');
const message = require('../models/message');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.message = message(sequelize, Sequelize);

db.sync = async() => {
  await sequelize.sync();
};

module.exports = db;
