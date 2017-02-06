'use strict';
module.exports = function(sequelize, DataTypes) {
  var Join = sequelize.define('Join', {
    userid: DataTypes.INTEGER,
    tripid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Join;
};