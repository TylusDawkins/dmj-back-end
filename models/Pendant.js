'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pendant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pendant.init({
    name: DataTypes.STRING,
    colors: DataTypes.ARRAY,
    sizes: DataTypes.ARRAY
  }, {
    sequelize,
    modelName: 'Pendant',
    tableName:'pendants'
  });
  return Pendant;
};