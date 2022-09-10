const chai = require("chai");
const chaiHTTP = require("chai-http");
const { describe, it } = require("mocha");
const server = require("../test-server.js");

chai.use(chaiHTTP);
const { expect } = require("chai");

describe("API get request testing", () => {

  it("should fetch necessary api keys", (done) => {
    chai
      .request(server)
      .get("/api/apiKeyRelay")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.not.be.null;
        expect(res.status).to.equal(200);
        expect(JSON.stringify(res.body).includes("authDomainURL"));
        expect(JSON.stringify(res.body).includes("authClientID"));
        expect(JSON.stringify(res.body).includes("stripeDevKey"));
      });
    return done();
  });
});
