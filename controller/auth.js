const passport = require('passport');

const register = require('../utils/auth').register

exports.loginRenderGet = (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/');
  }

  return res.render('login', { 
    title: 'snry | Admin Login',
    success: req.flash('success'),
    error: req.flash('error')
  });
};

exports.loginGet = passport.authenticate('local', {
  failureRedirect: '/auth/login',
  failureFlash: true,
  successFlash: 'Successfully logged in!',
  successRedirect: '/admin/contacts'
});

exports.registerRenderGet = (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/');
  }

  return res.render('register', { 
    title: 'snry | Admin Registration',
    success: req.flash('success'),
    error: req.flash('error')
  });
};

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