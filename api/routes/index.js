'use strict';

module.exports = (app) => {
  app.use('/bakery', require('../../api/routes/cart'));
}
