/*===============
  ABOUT CONTROLLERS JS
  
  filename: about.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 17, 2022

  =============== */


// Render about page
exports.aboutRenderGet = (req, res, next) => {
  return res.render('about', { 
    title: 'snry | About',
    success: req.flash('success'),
    error: req.flash('error')
  });
};

