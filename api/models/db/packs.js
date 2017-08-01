'use strict'
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('packs', {
    productId: { type: Sequelize.STRING(10), allowNull: false, field: "productId" },
    packs: { type: Sequelize.INTEGER(3), allowNull: true, defaultValue: null, field: "packs" },
    price: { type: Sequelize.FLOAT(6,3), allowNull: true, defaultValue: null, field: "price" }
  }, {
    timestamps: false,
    tableName: "productPacks"
  });
}
