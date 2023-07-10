'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bead extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bead.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    colors: DataTypes.ARRAY(DataTypes.STRING),
    sizes: DataTypes.ARRAY(DataTypes.STRING),
    shape: DataTypes.STRING,
    image: DataTypes.STRING,
    materials: DataTypes.ARRAY(DataTypes.STRING),
    natural: DataTypes.BOOLEAN,
    supplier: DataTypes.STRING,
    supplier_sku: DataTypes.STRING
  }, {
    sequelize,
    modelName:'Bead',
    tableName:'beads'
  });
  return Bead;
};