exports.contactRenderGet = (req, res, next) => {
  return res.render('contact', { 
    title: 'snry | Contact Details',
    success: req.flash('success'),
    error: req.flash('error')
  });
};