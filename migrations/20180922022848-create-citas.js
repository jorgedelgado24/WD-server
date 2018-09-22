'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Citas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lavacoches: {
        type: Sequelize.STRING
      },
      empresa: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.STRING
      },
      hora: {
        type: Sequelize.STRING
      },
      reservado: {
        type: Sequelize.BOOLEAN
      },
      lavado: {
        type: Sequelize.BOOLEAN
      },
      usuario: {
        type: Sequelize.STRING
      },
      marca_auto: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      año: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      placas: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.DECIMAL
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Citas');
  }
};