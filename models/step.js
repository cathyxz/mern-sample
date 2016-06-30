"use strict";

module.exports = function(sequelize, DataTypes) {
  var Step = sequelize.define("Step", {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Step.hasMany(models.Item, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Step;
};