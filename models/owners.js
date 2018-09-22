'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owners = sequelize.define('Owners', {
    nombre: DataTypes.STRING,
    active: DataTypes.INTEGER
  }, {});
  Owners.associate = function(models) {
    // associations can be defined here
    Owners.belongsToMany(models.Empresas, {
      through: 'Owners_Empresa',
      foreignKey: 'ownerId'
    });
  };
  return Owners;
};