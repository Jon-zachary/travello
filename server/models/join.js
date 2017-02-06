'use strict';
module.exports = function(sequelize, DataTypes) {
  var Join = sequelize.define('Join', {
    user_id: DataTypes.INTEGER,
    trip_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Join;
};