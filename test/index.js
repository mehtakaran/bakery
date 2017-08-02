const config    = require("config"),
      chai      = require('chai'),
      chaiHttp  = require('chai-http'),
      server    = config.get("test.server") + ":" +config.get("port");

if(config.has("test")) {
  chai.use(chaiHttp);
  let should = chai.should();
  let expect = chai.expect;

  describe('GET /bakery/product-list', () => {
    it('returns list of all the products', (done) => {
      chai.request(server)
        .get('/bakery/product-list')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;

          let d = res.body;
          d.should.be.a('object');
          d.should.have.property('res');
          d.should.have.property('code');

          let dt = d.res;
          dt.should.be.a('array');

          if(dt.length) {
            dt.forEach((ele, i) => {
              ele.should.be.a('object');
              ele.should.have.property('productId');
              ele.should.have.property('productName');
              ele.should.have.property('price');
              ele.should.have.property('quant');
              ele.should.have.property('msg');
            })
          }
          done();
        });
    })
  })
}
