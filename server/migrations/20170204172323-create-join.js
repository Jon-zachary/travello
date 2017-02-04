'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Joins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INT
      },
      trip_id: {
        type: Sequelize.INT
      },
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Joins');
  }
};