'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fechas', [{
      fecha: '2018-9-24',
      DiaId: 1
    },{
      fecha: '2018-10-1',
      DiaId: 1
    },{
      fecha: '2018-10-8',
      DiaId: 1
    },{
      fecha: '2018-10-15',
      DiaId: 1
    },{
      fecha: '2018-10-22',
      DiaId: 1
    },{
      fecha: '2018-10-29',
      DiaId: 1
    },{
      fecha: '2018-11-5',
      DiaId: 1
    },{
      fecha: '2018-11-12',
      DiaId: 1
    },{
      fecha: '2018-11-19',
      DiaId: 1
    },{
      fecha: '2018-11-26',
      DiaId: 1
    },{
      fecha: '2018-12-3',
      DiaId: 1
    },{
      fecha: '2018-12-10',
      DiaId: 1
    },{
      fecha: '2018-12-17',
      DiaId: 1
    },{
      fecha: '2018-12-24',
      DiaId: 1
    },{
      fecha: '2018-12-31',
      DiaId: 1
    },{
      fecha: '2018-9-25',
      DiaId: 2
    },{
      fecha: '2018-10-2',
      DiaId: 2
    },{
      fecha: '2018-10-9',
      DiaId: 2
    },{
      fecha: '2018-10-16',
      DiaId: 2
    },{
      fecha: '2018-10-23',
      DiaId: 2
    },{
      fecha: '2018-10-30',
      DiaId: 2
    },{
      fecha: '2018-11-6',
      DiaId: 2
    },{
      fecha: '2018-11-13',
      DiaId: 2
    },{
      fecha: '2018-11-20',
      DiaId: 2
    },{
      fecha: '2018-11-27',
      DiaId: 2
    },{
      fecha: '2018-12-4',
      DiaId: 2
    },{
      fecha: '2018-12-11',
      DiaId: 2
    },{
      fecha: '2018-12-18',
      DiaId: 2
    },{
      fecha: '2018-12-25',
      DiaId: 2
    },{
      fecha: '2018-9-26',
      DiaId: 3
    },{
      fecha: '2018-10-3',
      DiaId: 3
    },{
      fecha: '2018-10-10',
      DiaId: 3
    },{
      fecha: '2018-10-17',
      DiaId: 3
    },{
      fecha: '2018-10-24',
      DiaId: 3
    },{
      fecha: '2018-10-31',
      DiaId: 3
    },{
      fecha: '2018-11-7',
      DiaId: 3
    },{
      fecha: '2018-11-14',
      DiaId: 3
    },{
      fecha: '2018-11-21',
      DiaId: 3
    },{
      fecha: '2018-11-28',
      DiaId: 3
    },{
      fecha: '2018-12-5',
      DiaId: 3
    },{
      fecha: '2018-12-12',
      DiaId: 3
    },{
      fecha: '2018-12-19',
      DiaId: 3
    },{
      fecha: '2018-12-26',
      DiaId: 3
    },{
      fecha: '2018-9-27',
      DiaId: 4
    },{
      fecha: '2018-10-04',
      DiaId: 4
    },{
      fecha: '2018-10-11',
      DiaId: 4
    },{
      fecha: '2018-10-18',
      DiaId: 4
    },{
      fecha: '2018-10-25',
      DiaId: 4
    },{
      fecha: '2018-11-1',
      DiaId: 4
    },{
      fecha: '2018-11-8',
      DiaId: 4
    },{
      fecha: '2018-11-15',
      DiaId: 4
    },{
      fecha: '2018-11-22',
      DiaId: 4
    },{
      fecha: '2018-11-29',
      DiaId: 4
    },{
      fecha: '2018-12-6',
      DiaId: 4
    },{
      fecha: '2018-12-13',
      DiaId: 4
    },{
      fecha: '2018-12-20',
      DiaId: 4
    },{
      fecha: '2018-12-27',
      DiaId: 4
    },{
      fecha: '2018-9-28',
      DiaId: 2
    },{
      fecha: '2018-10-5',
      DiaId: 2
    },{
      fecha: '2018-10-12',
      DiaId: 2
    },{
      fecha: '2018-10-19',
      DiaId: 2
    },{
      fecha: '2018-10-26',
      DiaId: 2
    },{
      fecha: '2018-11-2',
      DiaId: 2
    },{
      fecha: '2018-11-9',
      DiaId: 2
    },{
      fecha: '2018-11-16',
      DiaId: 2
    },{
      fecha: '2018-11-23',
      DiaId: 2
    },{
      fecha: '2018-11-30',
      DiaId: 2
    },{
      fecha: '2018-12-7',
      DiaId: 2
    },{
      fecha: '2018-12-14',
      DiaId: 2
    },{
      fecha: '2018-12-21',
      DiaId: 2
    },{
      fecha: '2018-12-28',
      DiaId: 2
    }], {});
},

down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Fechas', null, {});
}
};
