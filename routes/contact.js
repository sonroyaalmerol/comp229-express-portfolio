const express = require('express');
const router = express.Router();

const contactController = require('../controller/contact');

router.get('/', contactController.contactRenderGet);

module.exports = router;
