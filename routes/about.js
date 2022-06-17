/*===============
  ABOUT ROUTES JS
  
  filename: about.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 16, 2022

  =============== */

const express = require('express');
const router = express.Router();

const aboutController = require('../controller/about');

router.get('/', aboutController.aboutRenderGet);

module.exports = router;
