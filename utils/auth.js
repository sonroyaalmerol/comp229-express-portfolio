const User = require('../models/user').User;

const login = async (username, password) => {
  if (!username || !password) {
    throw new Error("Username and password is required!");
  }

  const user = await User.findOne({
    username
  }).exec();

  if (!user) {
    throw new Error("Username not found!");
  }

  const validate = await user.isValidPassword(password);

  if (!validate) {
    throw new Error("Wrong credentials!");
  }

  return user;
}

const register = async (username, password, confirmPassword, email) => {
  if (password !== confirmPassword) {
    throw new Error("Password does not match!");
  }

  const user = new User({
    username,
    password,
    email
  });

  await user.save();

  return user;
}

module.exports = {
  login,
  register
}