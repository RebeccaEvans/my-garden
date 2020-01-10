'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('plants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      latinName: {
        type: Sequelize.STRING
      },
      commonName: {
        type: Sequelize.STRING
      },
      imgUrl: {
        type: Sequelize.STRING
      },
      plantType: {
        type: Sequelize.STRING
      },
      foliage: {
        type: Sequelize.STRING
      },
      hardiness: {
        type: Sequelize.STRING
      },
      exposure: {
        type: Sequelize.STRING
      },
      waterReq: {
        type: Sequelize.STRING
      },
      seasonalInt: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('plants');
  }
};