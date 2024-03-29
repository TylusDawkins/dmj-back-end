'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order,
        {
          foreignKey:'user_id',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        })
        User.hasMany(models.Shipment, {
          foreignKey:'user_id',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        })
    }
  }
  User.init({
    Username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};