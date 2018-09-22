'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      calle: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      torre - piso: {
        type: Sequelize.STRING
      },
      colonia: {
        type: Sequelize.STRING
      },
      municipio - ciudad: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
      },
      contacto: {
        type: Sequelize.STRING
      },
      telefono: {
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
    return queryInterface.dropTable('Empresas');
  }
};