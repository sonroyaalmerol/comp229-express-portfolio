const createError = require('http-errors');
const BusinessContact = require('../models/business_contact').BusinessContact;

exports.contactsRenderGet = async (req, res, next) => {
  const contacts = await BusinessContact.find().sort('name').lean().exec() ?? [];

  return res.render('business-contacts', { 
    title: 'snry | Business Contacts',
    success: req.flash('success'),
    error: req.flash('error'),
    data: contacts
  });
};

exports.contactRenderCreate = async (req, res, next) => {
  return res.render('business-contact', { 
    title: 'snry | Business Contact',
    success: req.flash('success'),
    error: req.flash('error'),
    data: { name: '', number: '', email: '' }
  });
};

exports.contactRenderGet = async (req, res, next) => {
  try {
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

exports.contactCreate = async (req, res, next) => {
  const contact = new BusinessContact(req.body);
  await contact.save();
  
  req.flash('success', 'Successfully created contact!');
  return res.redirect('/admin/contacts');
};

exports.contactUpdate = async (req, res, next) => {
  await BusinessContact.findByIdAndUpdate(req.params.id, req.body).exec();
  
  req.flash('success', 'Successfully updated contact!');
  return res.redirect('/admin/contacts');
};

exports.contactDelete = async (req, res, next) => {
  await BusinessContact.findByIdAndDelete(req.params.id).exec();
  
  req.flash('success', 'Successfully deleted contact!');
  return res.redirect('/admin/contacts');
};
