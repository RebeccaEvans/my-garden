'use strict';
module.exports = (sequelize, DataTypes) => {
  const gardens_plants = sequelize.define('gardens_plants', {
    gardenId: DataTypes.INTEGER
  }, {});
  gardens_plants.associate = function(models) {
    // associations can be defined here
  };
  return gardens_plants;
};