'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fechas = sequelize.define('Fechas', {
    fecha: DataTypes.STRING
  }, {});
  Fechas.associate = function(models) {
    // associations can be defined here
    Fechas.belongsTo(models.Dias, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Fechas;
};