'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dias', [{
      dia: 'Lunes',
    },{
      dia: 'Martes',
    },{
      dia: 'Miercoles',
    },{
      dia: 'Jueves' 
    },{
      dia: 'Viernes'
    }], {});
},

down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dias', null, {});
}
};
