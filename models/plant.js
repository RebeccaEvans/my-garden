'use strict';
module.exports = (sequelize, DataTypes) => {
  const plant = sequelize.define('plant', {
    url: DataTypes.STRING,
    latinName: DataTypes.STRING,
    commonName: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    plantType: DataTypes.STRING,
    foliage: DataTypes.STRING,
    hardiness: DataTypes.STRING,
    exposure: DataTypes.STRING,
    waterReq: DataTypes.STRING,
    seasonalInt: DataTypes.STRING
  }, {});
  plant.associate = function(models) {
    models.plant.belongsToMany(models.garden, {through: 'gardens_plants'})
  };
  return plant;
};