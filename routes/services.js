/*===============
  SERVICES ROUTES JS
  
  filename: services.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 16, 2022

  =============== */

const express = require('express');
const router = express.Router();

const servicesController = require('../controller/services');

router.get('/', servicesController.servicesRenderGet);

module.exports = router;
