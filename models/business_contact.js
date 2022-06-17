/*===============
  BUSINESS CONTACT MODEL JS
  
  filename: business_contact.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 17, 2022

  =============== */

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