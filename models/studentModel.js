const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/config');

const sequelize = db.sequelize;

const Student = sequelize.define('student', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Student;
