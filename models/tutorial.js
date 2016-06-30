"use strict";

module.exports = function(sequelize, DataTypes) {
  var Tutorial = sequelize.define("Tutorial", {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Tutorial.hasMany(models.Step, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Tutorial;
};