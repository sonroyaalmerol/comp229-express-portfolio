const mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    index: true,
    unique: true,
    required: 'Username is required!',
    trim: true
  },
  password: {
    type: String,
    required: true,
    validate: [(password) => {
      return password && password.length >= 6;
    }, 'Password should have at least 6 characters!']
  },
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
    match: [/.+\@.+\..+/, "Please fill in a valid email address!"]
  },
  salt: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', async function (next) {
  const user = this;

  if (this.password) {
    this.salt = Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64');
    this.password = this.hashPassword(user.password);
  }

  next();
});

UserSchema.methods.hashPassword = function(password) {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  return user.password === this.hashPassword(password);
}

const User = mongoose.model('User', UserSchema);

UserSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

module.exports = {
  User
};