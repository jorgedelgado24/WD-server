'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AutosUsuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('AutosUsuarios');
  }
};