'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Owners_Empresa', [{
      empresaId: 1,
      ownerId: 1
    }, {
      empresaId: 2,
      ownerId: 1
    }, {
      empresaId: 3,
      ownerId: 1
    }, {
      empresaId: 1,
      ownerId: 2
    }, {
      empresaId: 2,
      ownerId: 2
    }, {
      empresaId: 3,
      ownerId: 2
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Owners_Empresa', null, {});
  }
};
