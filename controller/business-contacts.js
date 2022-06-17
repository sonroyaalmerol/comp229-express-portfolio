/*===============
  BUSINESS CONTACTS CONTROLLERS JS
  
  filename: business-contacts.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 17, 2022

  =============== */

const createError = require('http-errors');
const BusinessContact = require('../models/business_contact').BusinessContact;

// Render business contacts page
exports.contactsRenderGet = async (req, res, next) => {
  // Get all contacts sorted by name
  const contacts = await BusinessContact.find().sort('name').lean().exec() ?? [];

  return res.render('business-contacts', { 
    title: 'snry | Business Contacts',
    success: req.flash('success'),
    error: req.flash('error'),
    data: contacts
  });
};

// Render new contact page
exports.contactRenderCreate = async (req, res, next) => {
  return res.render('business-contact', { 
    title: 'snry | Business Contact',
    success: req.flash('success'),
    error: req.flash('error'),
    data: { name: '', number: '', email: '' }
  });
};

// Render update contact page
exports.contactRenderGet = async (req, res, next) => {
  try {
    // Retrieve current contact data
    const contact = await BusinessContact.findById(req.params.id).lean().exec();

    if(!contact) {
      return next(createError(404));
    }

    return res.render('business-contact', { 
      title: 'snry | Business Contact',
      success: req.flash('success'),
      error: req.flash('error'),
      data: contact
    });
  } catch (err) {
    return next(createError(404));
  }
};

// Create new contact
exports.contactCreate = async (req, res, next) => {
  const contact = new BusinessContact(req.body);
  await contact.save();
  
  req.flash('success', 'Successfully created contact!');
  return res.redirect('/admin/contacts');
};

// Update existing contact
exports.contactUpdate = async (req, res, next) => {
  await BusinessContact.findByIdAndUpdate(req.params.id, req.body).exec();
  
  req.flash('success', 'Successfully updated contact!');
  return res.redirect('/admin/contacts');
};

// Delete contact
exports.contactDelete = async (req, res, next) => {
  await BusinessContact.findByIdAndDelete(req.params.id).exec();
  
  req.flash('success', 'Successfully deleted contact!');
  return res.redirect('/admin/contacts');
};
