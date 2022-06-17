/*===============
  CONTACT PAGE CONTROLLERS JS
  
  filename: contact.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 17, 2022

  =============== */


// Render contact page
exports.contactRenderGet = (req, res, next) => {
  return res.render('contact', { 
    title: 'snry | Contact Details',
    success: req.flash('success'),
    error: req.flash('error')
  });
};