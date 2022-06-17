const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  return res.redirect('/');
});

router.get('/contacts', (req, res, next) => {
  return res.render('business-contacts', { 
    title: 'snry | Business Contacts',
    success: req.flash('success'),
    error: req.flash('error')
  });
})

module.exports = router;
