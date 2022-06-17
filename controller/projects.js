exports.projectsRenderGet = (req, res, next) => {
  return res.render('projects', { 
    title: 'snry | Projects',
    success: req.flash('success'),
    error: req.flash('error')
  });
};