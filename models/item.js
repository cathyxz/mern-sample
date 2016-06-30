"use strict";

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    url: DataTypes.STRING, 
    type: DataTypes.INTEGER,
    title: DataTypes.STRING, 
    description: DataTypes.STRING, 
    img_url: DataTypes.STRING, 
    video_url: DataTypes.STRING, 
    quote: DataTypes.STRING
  });

  return Item;
};