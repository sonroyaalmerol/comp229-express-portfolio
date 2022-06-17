/*===============
  INDEX ROUTES JS
  
  filename: index.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 16, 2022

  =============== */

const express = require('express');
const router = express.Router();

const indexController = require('../controller/index');

router.get('/', indexController.indexRenderGet);

module.exports = router;
