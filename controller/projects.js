/*===============
  PROJECTS CONTROLLERS JS
  
  filename: projects.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 17, 2022

  =============== */

// Render projects page
exports.projectsRenderGet = (req, res, next) => {
  return res.render('projects', { 
    title: 'snry | Projects',
    success: req.flash('success'),
    error: req.flash('error')
  });
};