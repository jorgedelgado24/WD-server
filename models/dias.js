'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dias = sequelize.define('Dias', {
    dia: DataTypes.STRING
  }, {});
  Dias.associate = function(models) {
    // associations can be defined here
    Dias.belongsToMany(models.Empresas, {
      through: 'Dias_Empresa',
      foreignKey: 'diaId'
    });
    Dias.hasMany(models.Fechas, {
      onDelete: "cascade"
    });
  };
  return Dias;
};