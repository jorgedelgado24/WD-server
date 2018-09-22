'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tiposLavados', [{
      tipo: 'Auto',
      precio: 80
    },{
      tipo: 'Camioneta',
      precio: 100
    }], {});
},

down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tiposLavados', null, {});
}
};
