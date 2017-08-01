'use strict'

const co = require('co'),
      Product = require('../models/product'),
      prod = new Product();

exports.calculatePacks = (req, res) => {
  let obj = req.params;
  co(function *() {
    let packs = yield prod.calculatePacks(obj);
    res.json({
      code:0,
      res:packs
    });
  }).catch((err) => {
    console.log("Error occured");
    console.log(err);
    res.json({
      code:1,
      msg:err,
      res:{}
    });
  });
}

exports.productList = (req, res) => {
  co(function *() {
    let productList = yield prod.productList();
    res.json({
      code:0,
      res:productList
    })
  })
  .catch((err) => {
    res.json({
      code:1,
      msg:err,
      res:[]
    })
  });
}
