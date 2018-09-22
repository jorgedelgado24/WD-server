'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lavacoches = sequelize.define('Lavacoches', {
    nombre: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {});
  Lavacoches.associate = function(models) {
    // associations can be defined here
  };
  return Lavacoches;
};