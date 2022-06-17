exports.indexRenderGet = (req, res, next) => {
  return res.render('index', { 
    title: 'snry | Home',
    success: req.flash('success'),
    error: req.flash('error')
  });
};