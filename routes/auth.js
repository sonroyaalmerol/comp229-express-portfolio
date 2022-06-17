const express = require('express');
const router = express.Router();

const authController = require('../controller/auth');

router.get('/', (req, res) => {
  return res.redirect('/auth/login');
});

router.get('/login', authController.loginRenderGet);
router.post('/login', authController.loginGet);
router.get('/register', authController.registerRenderGet);
router.post('/register', authController.registerCreate);
router.get('/logout', authController.logoutGet);

module.exports = router;
