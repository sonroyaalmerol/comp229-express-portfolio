const express = require('express');
const router = express.Router();

const passport = require('passport');

const register = require('../utils/auth').register

/* GET home page. */
router.get('/', (req, res) => {
  return res.redirect('/auth/login');
});

router.get('/login', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/');
  }

  return res.render('login', { 
    title: 'snry | Admin Login',
    success: req.flash('success'),
    error: req.flash('error')
  });
});

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/auth/login',
  failureFlash: true,
}), (req, res) => {
  req.flash('success', 'Successfully logged in!');
  return res.redirect('/admin/contacts');
});

router.get('/register', (req, res) => {
  console.log(req.user);
  if (req.user) {
    res.redirect('/');
  }

  return res.render('register', { 
    title: 'snry | Admin Registration',
    success: req.flash('success'),
    error: req.flash('error')
  });
});

router.post('/register', async (req, res) => {
  try {
    const { username, password, confirmPassword, email } = req.body;

    await register(username, password, confirmPassword, email);
  } catch (err) {
    req.flash('error', err.message);
    return res.redirect('/auth/register');
  }

  req.flash('success', 'Successfully registered!');
  return res.redirect('/auth/login');
});

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      req.flash('error', err.message);
    } else {
      req.flash('success', 'Successfully logged out!');
    }

    return res.redirect(`/`);
  });
  
});

module.exports = router;
