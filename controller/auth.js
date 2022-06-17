/*===============
  AUTH CONTROLLERS JS
  
  filename: auth.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 17, 2022

  =============== */

const passport = require('passport');

const register = require('../utils/auth').register

// Render login page
exports.loginRenderGet = (req, res) => {
  // Redirect to home page if already authenticated
  if (req.isAuthenticated()) {
    res.redirect('/');
  }

  return res.render('login', { 
    title: 'snry | Admin Login',
    success: req.flash('success'),
    error: req.flash('error')
  });
};

// Authenticate then redirect on failure and success
exports.loginPost = passport.authenticate('local', {
  failureRedirect: '/auth/login',
  failureFlash: true,
  successFlash: 'Successfully logged in!',
  successRedirect: '/admin/contacts'
});

// Render registration page
exports.registerRenderGet = (req, res) => {
  // Redirect to home page if already authenticated
  if (req.isAuthenticated()) {
    res.redirect('/');
  }

  return res.render('register', { 
    title: 'snry | Admin Registration',
    success: req.flash('success'),
    error: req.flash('error')
  });
};

// Register user
exports.registerCreate = async (req, res) => {
  try {
    const { username, password, confirmPassword, email } = req.body;

    await register(username, password, confirmPassword, email);
  } catch (err) {
    req.flash('error', err.message);
    return res.redirect('/auth/register');
  }

  req.flash('success', 'Successfully registered!');
  return res.redirect('/auth/login');
};

// Logout user
exports.logoutGet = (req, res) => {
  req.logout((err) => {
    if (err) {
      req.flash('error', err.message);
    } else {
      req.flash('success', 'Successfully logged out!');
    }

    return res.redirect(`/`);
  });
};