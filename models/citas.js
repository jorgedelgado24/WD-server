'use strict';
module.exports = (sequelize, DataTypes) => {
  const Citas = sequelize.define('Citas', {
    lavacoches: DataTypes.STRING,
    empresa: DataTypes.STRING,
    fecha: DataTypes.STRING,
    hora: DataTypes.STRING,
    reservado: DataTypes.BOOLEAN,
    lavado: DataTypes.BOOLEAN,
    usuario: DataTypes.STRING,
    marca_auto: DataTypes.STRING,
    modelo: DataTypes.STRING,
    año: DataTypes.STRING,
    color: DataTypes.STRING,
    placas: DataTypes.STRING,
    tipo: DataTypes.STRING,
    precio: DataTypes.DECIMAL
  }, {});
  Citas.associate = function(models) {
    // associations can be defined here
  };
  return Citas;
};