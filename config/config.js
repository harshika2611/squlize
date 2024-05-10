const Sequelize = require('sequelize');
const mysql = require('mysql2');
const sequelize = new Sequelize('hello_world_db', 'root', 'Mysql@2611', {
  host: 'localhost',
  dialect: 'mysql',
});
const authSequil = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
authSequil();

const db = { sequelize: sequelize };
sequelize.sync();
module.exports = db;
