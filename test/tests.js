const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const assert = require('assert');
const should = require('should');

chai.use(chaiHttp);

describe("----------START TEST FOR app.js----------", () => {
    it("Checks if the App is working", (done) => {
        chai.request(app)
        .get("/math/check")
        .end((err, res) => {
            if (err){
                done(err)
                process.exit(1)
            } else {
                res.text.should.equal("Congratulations! Your app works! :)");
                done()
            }
        })
    })

    it("Checks the /mul route with both arguments as numbers", (done) => {
        /* Sends post data as JSON,
         * {
         *   "x": 2,
         *   "y": 7
         * }
         */

        chai.request(app)
        .post("/math/mul")
        .send({'x': 2, 'y':7})
        .end((err, res) => {
            if (err) {
                done(err);
                process.exit(1);
            } else {
                res.text.should.equal("2 * 7 = 14");
                done();
            }
        })

    })

    it("Checks the /mul route with only x argument", (done) => {
        /* Sends post data as JSON,
         * {
         *   "x": 2,
         * }
         */

        chai.request(app)
        .post("/math/mul")
        .send({'x': 2})
        .end((err, res) => {
            if (err) {
                done(err);
                process.exit(1);
            } else {
                res.text.should.equal("Both arguments (x, y) must be provided.");
                done();
            }
        })

    })

    it("Checks the /mul route with only y argument", (done) => {
        /* Sends post data as JSON,
         * {
         *   "y": 2,
         * }
         */

        chai.request(app)
        .post("/math/mul")
        .send({'y': 2})
        .end((err, res) => {
            if (err) {
                done(err);
                process.exit(1);
            } else {
                res.text.should.equal("Both arguments (x, y) must be provided.");
                done();
            }
        })

    })

    it("Checks the /mul route without arguments", (done) => {
        /* Sends post data as JSON,
         * {
         * }
         */

        chai.request(app)
        .post("/math/mul")
        .send({})
        .end((err, res) => {
            if (err) {
                done(err);
                process.exit(1);
            } else {
                res.text.should.equal("Both arguments (x, y) must be provided.");
                done();
            }
        })

    })

    it("Checks the /mul route with x argument as NaN", (done) => {
        /* Sends post data as JSON,
         * {
         *   "x": "p",
         *   "y": 7
         * }
         */

        chai.request(app)
        .post("/math/mul")
        .send({'x': 'p', 'y':7})
        .end((err, res) => {
            if (err) {
                done(err);
                process.exit(1);
            } else {
                res.text.should.equal("Both arguments (x, y) must be numbers.");
                done();
            }
        })

    })

    it("Checks the /mul route with y argument as NaN", (done) => {
        /* Sends post data as JSON,
         * {
         *   "x": 2,
         *   "y": "p"
         * }
         */

        chai.request(app)
        .post("/math/mul")
        .send({'x': 2, 'y':'p'})
        .end((err, res) => {
            if (err) {
                done(err);
                process.exit(1);
            } else {
                res.text.should.equal("Both arguments (x, y) must be numbers.");
                done();
            }
        })

    })

})
