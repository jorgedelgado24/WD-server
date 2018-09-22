'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dias_Empresa', [{
      diaId: 1,
      empresaId: 1
    },{
      diaId: 2,
      empresaId: 2
    },{
      diaId: 3,
      empresaId: 3
    }], {});
},

down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dias_Empresa', null, {});
}
};
