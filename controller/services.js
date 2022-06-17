/*===============
  SERVICES CONTROLLERS JS
  
  filename: services.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 17, 2022

  =============== */

// Render services page
exports.servicesRenderGet = (req, res, next) => {
  return res.render('services', { 
    title: 'snry | Services',
    success: req.flash('success'),
    error: req.flash('error')
  });
};