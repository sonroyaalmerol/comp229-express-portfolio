const mongoose = require('mongoose');
const env = require('./env');

exports.connect = () => {
  mongoose.connect(env.databaseUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}



