exports.aboutRenderGet = (req, res, next) => {
  return res.render('about', { 
    title: 'snry | About',
    success: req.flash('success'),
    error: req.flash('error')
  });
};

