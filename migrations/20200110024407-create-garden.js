'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('gardens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      aspect: {
        type: Sequelize.STRING
      },
      exposure: {
        type: Sequelize.STRING
      },
      soilType: {
        type: Sequelize.STRING
      },
      moistureLevel: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('gardens');
  }
};