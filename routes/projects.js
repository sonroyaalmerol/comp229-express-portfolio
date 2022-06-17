const express = require('express');
const router = express.Router();

const projectsController = require('../controller/projects');

router.get('/', projectsController.projectsRenderGet);

module.exports = router;
