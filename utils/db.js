/*===============
  DATABASE UTILITIES JS
  
  filename: db.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 16, 2022

  =============== */

const mongoose = require('mongoose');
const env = require('./env');

// Connect Mongoose to MongoDB
exports.connect = () => {
  mongoose.connect(env.databaseUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}



