var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const JwtUtil = require('./public/utils/jwt');
var FileUpload = require('express-fileupload')

var usersRouter = require('./routes/users');
var utilsApiRouter = require('./routes/utilsApi');
var followRouter = require('./routes/follow');
var collectionRouter = require('./routes/collection')
var clockRouter = require('./routes/clock');
var messageRouter = require('./routes/message');
var travelRouter = require('./routes/travels/travel');
var commentRouter = require('./routes/travels/comment');
var cityRouter = require('./routes/travels/city');
var routeRouter = require('./routes/travels/route');

var app = express();

const ENV = process.env.NODE_ENV || 'production'

if (ENV === 'development') {
  global.baseUrl = 'http://127.0.0.1:3000'
}else if (ENV === 'production') {
  global.baseUrl = 'http://127.0.0.1:3000'
}

app.all('*', function (req, res, next) {    
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-type,token");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(FileUpload());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/serverImage',express.static(path.join(__dirname,'serverImage')));

app.use(function (req, res, next) {
  if (req.url !== '/api/users/login' && req.url !== '/api/users/reg' && req.url !=='/api/travels/route/queryAllRoute'){
      let token = req.headers.token;
      let jwt = new JwtUtil(token);
      let result = jwt.verifyToken();
      // 如果考验通过就next，否则就返回登录信息不正确
      if (result == 'err') {
          res.send({status: 403, msg: '登录已过期,请重新登录'});
          // res.render('login.html');
      } else {
        global.userInfo = result
        next();
      }
  } else {
      next();
  }
});

app.use('/api/users', usersRouter);
app.use('/api/utilsApi', utilsApiRouter);
app.use('/api/follow', followRouter);
app.use('/api/collection', collectionRouter);
app.use('/api/clock', clockRouter);
app.use('/api/message', messageRouter);

app.use('/api/travels/travel',travelRouter);
app.use('/api/travels/comment',commentRouter);
app.use('/api/travels/city',cityRouter);
app.use('/api/travels/route',routeRouter);

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
