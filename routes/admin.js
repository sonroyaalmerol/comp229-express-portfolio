var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('admin', { title: 'snry | Admin Page' });
});

router.get('/login', (req, res, next) => {
  res.render('login', { title: 'snry | Admin Login' });
});

module.exports = router;
