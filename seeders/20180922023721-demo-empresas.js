'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Empresas', [{
        nombre: 'GE',
        active: true
      },{
        nombre: 'Axtel',
        active: true
      },{
        nombre: 'Neoris',
        active: true
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Empresas', null, {});
  }
};
