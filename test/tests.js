const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('assert');
const should = require('should');
const app = require('../app');

chai.use(chaiHttp);

describe('----------START TEST FOR app.js----------', () => {
  it('Checks if the App is working', (done) => {
    chai.request(app)
      .get('/math/check')
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.text.should.equal('Congratulations! Your app works! :)');
          done();
        }
      });
  });


  it('Checks if the multiplication route is working', (done) => {
    chai.request(app)
      .post('/math/mul')
      .send({
        param1: 2,
        param2: 3,
      })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          console.log(res);
          assert(res.body.result === 6);
          done();
        }
      });
  });
});
