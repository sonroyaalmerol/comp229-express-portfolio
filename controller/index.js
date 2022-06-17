/*===============
  INDEX CONTROLLERS JS
  
  filename: index.js
  author: Son Roy Almerol
  author id: 301220547
  date: June 17, 2022

  =============== */


// Render home page
exports.indexRenderGet = (req, res, next) => {
  return res.render('index', { 
    title: 'snry | Home',
    success: req.flash('success'),
    error: req.flash('error')
  });
};