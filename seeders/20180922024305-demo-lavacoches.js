'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lavacoches', [{
      nombre: 'Arturo Gutierrez',
      active: true
    }], {});
},

down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lavacoches', null, {});
}
};
