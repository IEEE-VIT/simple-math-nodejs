const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const assert = require("assert");
const should = chai.should();

chai.use(chaiHttp);

describe("----------START TEST FOR app.js----------", () => {

  it("Checks if the App is working", done => {
    chai
      .request(app)
      .get("/math/check")
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.text.should.equal("Congratulations! Your app works! :)");
          done();
        }
      });
  });

  it("Checks the POST /math/power", done => {
    chai
      .request(app)
      .post("/math/power")
      .send({ param1: 3, param2: 2 })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.body.result.should.be.a("number");
          res.body.meta.success.should.be.a("boolean");
          res.body.meta.message.should.be.a("string");
          res.body.meta.code.should.be.a("number");

          res.body.result.should.equal(9);

          done();
        }
      });
  });

  it("Checks the POST /math/power", done => {
    chai
      .request(app)
      .post("/math/factorial")
      .send({ param1: 5 })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.body.result.should.be.a("number");
          res.body.meta.success.should.be.a("boolean");
          res.body.meta.message.should.be.a("string");
          res.body.meta.code.should.be.a("number");

          res.body.result.should.equal(120);

          done();
        }
      });
  });

  it("Checks the POST /math/ceil", done => {
    chai
      .request(app)
      .post("/math/ceil")
      .send({ param1: 1.2 })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.body.result.should.be.a("number");
          res.body.meta.success.should.be.a("boolean");
          res.body.meta.message.should.be.a("string");
          res.body.meta.code.should.be.a("number");

          res.body.result.should.equal(2);

          done();
        }
      });
  });
});

it("Checks the POST /math/root with a valid request", (done) => {
        chai.request(app)
        .post("/math/root")
        .send({"data": {"param1": 9, "param2": 2}})
        .end((err, res) => {
            res.statusCode.should.equal(200);
            res.body.result.should.equal(3);
            res.body.meta.success.should.equal(true);
            res.body.meta.message.should.equal("Calculated root of 9 and degree 2");
            res.body.meta.code.should.equal(200);
            done();
        });
    });

    it("Checks the POST /math/root with an invalid request", (done) => {
        chai.request(app)
        .post("/math/root")
        .send({"data": {"param1": "9ssf", "param2": 2}})
        .end((err, res) => {
            res.statusCode.should.equal(400);
            res.body.meta.success.should.equal(false);
            res.body.meta.message.should.equal("Bad request, format should be: {data: {param1: number, param2: degree}}");
            res.body.meta.code.should.equal(400);
            done();
        });
    });
    
});