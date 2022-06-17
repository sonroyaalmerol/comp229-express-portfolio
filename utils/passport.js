const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { login } = require('./auth');
const User = require('../models/user').User;

exports.initialize = () => {
  passport.serializeUser((user, done) => {
    console.log('serialize');
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log('yo')
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



