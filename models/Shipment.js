'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shipment.belongsTo(models.Order, {
        foreignKey:'order_id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
      Shipment.belongsTo(models.User,{
        foreignKey:'user_id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
    }
  }
  Shipment.init({
    userId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Shipment',
    tableName:'shipments'
  });
  return Shipment;
};