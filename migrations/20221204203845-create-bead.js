'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('beads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description : {
        type: Sequelize.STRING
      },
      colors: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      sizes: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      shape: {
        type: Sequelize.STRING
      },
      image:{
        type: Sequelize.STRING
      },
      materials: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      natural: {
        type: Sequelize.BOOLEAN
      },
      supplier: {
        type: Sequelize.STRING
      },
      supplier_sku: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('beads');
  }
};