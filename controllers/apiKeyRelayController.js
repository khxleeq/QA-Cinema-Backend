const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
require("dotenv").config({ path: "./config/.env" });

const getApiKeys = asyncHandler((req, res) => {

  return res.status(200).json({
    authDomainURL: process.env.AUTH0_DOMAIN_URL,
    authClientID: process.env.AUTH0_CLIENT_ID,
    stripeDevKey: process.env.STRIPE_KEY,
  });
});

module.exports = { getApiKeys };
