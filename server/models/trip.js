'use strict';
module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define('Trip', {
    tripname: DataTypes.STRING(32),
    password: DataTypes.TEXT,
    description: DataTypes.STRING(128)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Trip;
};