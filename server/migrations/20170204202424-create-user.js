'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(32)
      },
      email: {
        type: Sequelize.STRING(128)
      },
      user_password: {
        type: Sequelize.STRING(128)
      },
      user_image: {
        type: Sequelize.STRING(128)
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};