'use strict';
module.exports = (sequelize, DataTypes) => {
  const AutosUsuarios = sequelize.define('AutosUsuarios', {
    marca_auto: DataTypes.STRING,
    modelo: DataTypes.STRING,
    año: DataTypes.STRING,
    color: DataTypes.STRING,
    placas: DataTypes.STRING
  }, {});
  AutosUsuarios.associate = function(models) {
    // associations can be defined here
  };
  return AutosUsuarios;
};