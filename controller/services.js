exports.servicesRenderGet = (req, res, next) => {
  return res.render('services', { 
    title: 'snry | Services',
    success: req.flash('success'),
    error: req.flash('error')
  });
};