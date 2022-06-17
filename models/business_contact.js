const mongoose = require('mongoose');

const BusinessContactSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  number: {
    type: String
  },
  email: {
    type: String,
    index: true,
    match: [/.+\@.+\..+/, "Please fill in a valid email address!"]
  }
});

const BusinessContact = mongoose.model('BusinessContact', BusinessContactSchema);

module.exports = {
  BusinessContact
};