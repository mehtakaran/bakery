'use strict'

const sequelize = require('../../config/db_config.js').seqConnect();

class Product {
  constructor() {
    this.sequelize = sequelize;
    this.products = this.sequelize.import("../models/db/products");
    this.packs = this.sequelize.import("../models/db/packs");
  }

  calculatePacks(obj) {
    return new Promise((resolve, reject) => {
      this.packs
        .findAll({
          attributes: ['packs', 'price'],
          where: {productId: obj.productid},
          order:[
            ['packs', 'DESC']
          ]
        })
        .then((row) => {
          let data = [];
          let prevTotal = obj.items;
          let remain;
          let totalAmount = 0;
          row.forEach((v) => {
            let d = this.productPacks(prevTotal, v.get("packs"));
            d.packSize = v.get("packs");
            d.price = Math.round((v.get("price") * d.qty) * 100) / 100;
            totalAmount = Math.round((totalAmount + d.price) * 100) / 100;
            data.push(d);
            prevTotal = d.rem;
            remain = d;
          })
          if(remain.rem) {
            reject("This quantity cannot be accepeted as it does not meet the availble package size");
          }
          else
            resolve({
              packs: data,
              amount: totalAmount
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  productPacks(total, packSize) {
    if(packSize > total) {
      return {
        qty: 0,
        rem: total
      }
    }
    else {
      let q = Math.floor(total/packSize);
      let r = total % packSize;
      return {
        qty: q,
        rem: r
      }
    }
  }

  productList() {
    return new Promise((resolve, reject) => {
      this.products
        .findAll({
          attributes: ['productId', 'productName']
        })
        .then((row) => {
          let data = [];
          row.forEach((v) => {
            let d = {
              productId: v.get("productId"),
              productName: v.get("productName"),
              price: 0,
              quant: 0,
              msg: ""
            }
            data.push(d);
          });
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }
}

module.exports = Product
