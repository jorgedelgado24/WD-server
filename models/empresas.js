'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empresas = sequelize.define('Empresas', {
    nombre: DataTypes.STRING,
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    torre_piso: DataTypes.STRING,
    colonia: DataTypes.STRING,
    municipio_ciudad: DataTypes.STRING,
    estado: DataTypes.STRING,
    pais: DataTypes.STRING,
    cp: DataTypes.INTEGER,
    contacto: DataTypes.STRING,
    telefono: DataTypes.STRING,
    active: DataTypes.INTEGER
  }, {});
  Empresas.associate = function(models) {
    // associations can be defined here
    Empresas.belongsToMany(models.Dias, {
      through: 'Dias_Empresa',
      foreignKey: 'empresaId'
    });
    Empresas.belongsToMany(models.Owners, {
      through: 'Owners_Empresa',
      foreignKey: 'empresaId'
    });

  };
  return Empresas;
};