'use strict';
module.exports = function(sequelize, DataTypes) {
  var Itinerary = sequelize.define('Itinerary', {
    userid: DataTypes.INTEGER,
    tripid: DataTypes.INTEGER,
    content: DataTypes.STRING(128)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Itinerary;
};