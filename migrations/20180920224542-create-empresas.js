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
      torre_piso: {
        type: Sequelize.STRING
      },
      colonia: {
        type: Sequelize.STRING
      },
      municipio_ciudad: {
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
      active: {
        type: Sequelize.BOOLEAN
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