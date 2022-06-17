const express = require('express');
const router = express.Router();

const createError = require('http-errors');
const BusinessContact = require('../models/business_contact').BusinessContact;


router.use((req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error', 'Unauthorized access!');
    return res.redirect('/auth/login');
  }
});

router.get('/', (req, res, next) => {
  return res.redirect('/');
});

router.get('/contacts', async (req, res, next) => {
  const contacts = await BusinessContact.find().lean().exec() ?? [];

  return res.render('business-contacts', { 
    title: 'snry | Business Contacts',
    success: req.flash('success'),
    error: req.flash('error'),
    data: contacts
  });
})

router.get('/contacts/new', async (req, res, next) => {
  return res.render('business-contact', { 
    title: 'snry | Business Contact',
    success: req.flash('success'),
    error: req.flash('error'),
    data: { name: '', number: '', email: '' }
  });
})

router.get('/contacts/:id', async (req, res, next) => {
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
})

router.post('/contacts', async (req, res, next) => {
  await BusinessContact.findByIdAndUpdate(req.params.id, req.body).exec();
  const contact = new BusinessContact(req.body);
  await contact.save();
  
  req.flash('success', 'Successfully created contact!');
  return res.redirect('/admin/contacts');
})

router.post('/contacts/:id', async (req, res, next) => {
  await BusinessContact.findByIdAndUpdate(req.params.id, req.body).exec();
  
  req.flash('success', 'Successfully updated contact!');
  return res.redirect('/admin/contacts');
})

router.get('/contacts/:id/delete', async (req, res, next) => {
  await BusinessContact.findByIdAndDelete(req.params.id).exec();
  
  req.flash('success', 'Successfully deleted contact!');
  return res.redirect('/admin/contacts');
})


module.exports = router;
