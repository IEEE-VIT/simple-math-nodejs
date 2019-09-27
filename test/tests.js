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
})