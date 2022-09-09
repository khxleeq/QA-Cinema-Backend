const express = require('express');
const router = express.Router();

const { getApiKeys } = require('../controllers/apiKeyRelayController');

router
.route('/')
.get(getApiKeys)

module.exports = router;