const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    index: true
  },
  password: {
    type: String
  },
  email: {
    type: String,
    index: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = {
  User
};