const express = require('express');
const router = express.Router();

const servicesController = require('../controller/services');

router.get('/', servicesController.servicesRenderGet);

module.exports = router;
