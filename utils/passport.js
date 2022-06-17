/*===============
  PASSPORT UTILITIES JS
  
  filename: passport.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 16, 2022

  =============== */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { login } = require('./auth');
const User = require('../models/user').User;

// Initialize Passport.js strategy
exports.initialize = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({
      _id: id
    }, '-password -salt', (err, user) => {
      done(err, user);
    });
  });

  passport.use(new LocalStrategy(async (username, password, done) => {
    let user = null;
    try {
      user = await login(username, password);
    } catch (err) {
      return done(null, false, { message: err.message });
    }
  
    return done(null, user);
  }));
}



