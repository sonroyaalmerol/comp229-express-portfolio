const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  return res.render('admin', { 
    title: 'snry | Admin Page',
    success: req.flash('success'),
    error: req.flash('error')
  });
});

module.exports = router;
