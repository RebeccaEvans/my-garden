'use strict';
module.exports = (sequelize, DataTypes) => {
  const garden = sequelize.define('garden', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    aspect: DataTypes.STRING,
    exposure: DataTypes.STRING,
    soilType: DataTypes.STRING,
    moistureLevel: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  garden.associate = function(models) {
    models.garden.belongsTo(models.user)
    models.garden.belongsToMany(models.plant, {through: 'gardens_plants'})
  };
  return garden;
};