'use strict'

const product = require('../controllers/product'),
      router = require('express').Router();

router.get('/total-packs/:productid/:items', product.calculatePacks);
router.get('/product-list', product.productList);

module.exports = router;
