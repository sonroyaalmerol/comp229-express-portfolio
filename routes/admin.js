const express = require('express');
const router = express.Router();

const businessContactsController = require('../controller/business-contacts');

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

router.get('/contacts', businessContactsController.contactsRenderGet);
router.get('/contacts/new',businessContactsController.contactRenderCreate);
router.get('/contacts/:id', businessContactsController.contactRenderGet);
router.post('/contacts', businessContactsController.contactCreate);
router.post('/contacts/:id', businessContactsController.contactUpdate);
router.get('/contacts/:id/delete', businessContactsController.contactDelete);


module.exports = router;
