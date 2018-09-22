'use strict';
module.exports = (sequelize, DataTypes) => {
  const TiposLavados = sequelize.define('TiposLavados', {
    tipo: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
  }, {});
  TiposLavados.associate = function(models) {
    // associations can be defined here
  };
  return TiposLavados;
};