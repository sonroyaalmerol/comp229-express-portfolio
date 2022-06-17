/*===============
  ADMIN ROUTES JS
  
  filename: admin.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 16, 2022

  =============== */

const express = require('express');
const router = express.Router();

const businessContactsController = require('../controller/business-contacts');

// Middleware to ensure user is authenticated on all pages under the /admin route
router.use((req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error', 'Unauthorized access!');
    return res.redirect('/auth/login');
  }
});

// Redirect /admin to home page
router.get('/', (req, res, next) => {
  return res.redirect('/');
});

router.get('/contacts', businessContactsController.contactsRenderGet);
router.get('/contacts/new',businessContactsController.contactRenderCreate);
router.get('/contacts/:id', businessContactsController.contactRenderGet);
router.post('/contacts', businessContactsController.contactCreate);
router.post('/contacts/:id', businessContactsController.contactUpdate);
router.get('/contacts/:id/delete', businessContactsController.contactDelete);


module.exports = router;
