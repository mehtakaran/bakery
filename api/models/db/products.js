'use strict'
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('products', {
    productId: { type: Sequelize.STRING(10), allowNull: false, primaryKey: true, field: "productId" },
    productName: { type: Sequelize.STRING(100), allowNull: true, defaultValue: null, field: "productName" }
  }, {
    timestamps: false,
    tableName: "productMaster"
  });
}
