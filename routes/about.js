const express = require('express');
const router = express.Router();

const aboutController = require('../controller/about');

router.get('/', aboutController.aboutRenderGet);

module.exports = router;
