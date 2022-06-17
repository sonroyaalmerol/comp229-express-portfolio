/*===============
  CONTACT ROUTES JS
  
  filename: contact.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 16, 2022

  =============== */

const express = require('express');
const router = express.Router();

const contactController = require('../controller/contact');

router.get('/', contactController.contactRenderGet);

module.exports = router;
