'use strict';
module.exports = function(sequelize, DataTypes) {
  var Join = sequelize.define('Join', {
    user_id: DataTypes.INT,
    trip_id: DataTypes.INT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Join;
};