var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var projectsRouter = require('./routes/projects');
var servicesRouter = require('./routes/services');
var adminRouter = require('./routes/admin');
var authRouter = require('./routes/auth');

require('./utils/db').connect();

var app = express();

const flash = require('connect-flash');
app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/stylesheets", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/javascripts", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));

const session = require('express-session');

const secret = require('./utils/env').secret;

app.use(session({
  secret,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge : (1 * 60 * 60 * 1000)
  }
}));

const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

require('./utils/passport').initialize();

// Pass authenticated status to locals for EJS templates to access
app.use((req, res, next) => {
  if (req.session.passport) { 
    res.locals.isAuthenticated = req.isAuthenticated();
  }

  return next();
});

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/projects', projectsRouter);
app.use('/services', servicesRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
