'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    celular: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Usuarios.associate = function(models) {
    // associations can be defined here
  };
  return Usuarios;
};