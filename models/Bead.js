'use strict';
const {
  Model
} = require('sequelize');
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
    color: DataTypes.STRING,
    sizes: DataTypes.ARRAY(DataTypes.STRING),
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Bead',
    tableName:'beads'
  });
  return Bead;
};