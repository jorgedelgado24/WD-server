'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Owners', [{
      nombre: 'Jorge Delgado',
      active: true
    },{
      nombre: 'Hector Hernandez',
      active: true
    }], {});
},

down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Owners', null, {});
}
};
