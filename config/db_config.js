const express   = require('express'),
      config    = require('config'),
      Sequelize = require('sequelize');

let seqConfig   = config.get("sequelize");

let seqConnect = function() {
  let sequelize = new Sequelize(seqConfig.database, seqConfig.user, seqConfig.password, {
    host: seqConfig.host,
    dialect: seqConfig.dialect,
    pool: seqConfig.pool
  });
  return sequelize;
}

module.exports.seqConnect = seqConnect;
