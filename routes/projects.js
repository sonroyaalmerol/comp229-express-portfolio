/*===============
  PROJECTS ROUTES JS
  
  filename: projects.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 16, 2022

  =============== */

const express = require('express');
const router = express.Router();

const projectsController = require('../controller/projects');

router.get('/', projectsController.projectsRenderGet);

module.exports = router;
