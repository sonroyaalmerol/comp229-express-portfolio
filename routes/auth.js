/*===============
  AUTH ROUTES JS
  
  filename: auth.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 16, 2022

  =============== */

const express = require('express');
const router = express.Router();

const authController = require('../controller/auth');

// Redirect /auth to /auth/login
router.get('/', (req, res) => {
  return res.redirect('/auth/login');
});

router.get('/login', authController.loginRenderGet);
router.post('/login', authController.loginPost);
router.get('/register', authController.registerRenderGet);
router.post('/register', authController.registerCreate);
router.get('/logout', authController.logoutGet);

module.exports = router;
