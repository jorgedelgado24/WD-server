'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [{
      nombre: 'Tino',
      apellido: 'Tino',
      email: 'tino@gmail.com',
      celular: '8120015218',
      password: 'tinocantu'
    }], {});
},

down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
}
};
