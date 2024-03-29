'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasOne(models.Shipment,
        {
          foreignKey:'order_id',
          onDelete:'CASCADE',
          onUpdate:'CASCADE' 
        })
        Order.belongsTo(models.User, {
          as:'user',
          foreignKey:'user_id',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        })
    }
  }
  Order.init({
    user_id: DataTypes.INTEGER,
    shipment_id: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName:'Order',
    tableName:'orders'
  });
  return Order;
};