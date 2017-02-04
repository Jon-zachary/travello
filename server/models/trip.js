'use strict';
module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define('Trip', {
    trip_name: DataTypes.STRING,
    trip_description: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Trip;
};