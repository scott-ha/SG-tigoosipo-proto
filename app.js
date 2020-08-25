var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userlogRouter = require('./routes/userlog');
var seatManagerRouter = require('./routes/seatManager');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/userlog', userlogRouter);
app.use('/seatmanager', seatManagerRouter);
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
  res.render('404');
});
// HN need to modify....
var seats = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
];

app.io = require('socket.io')();
app.io.on('connection', function(socket) {
  console.log('socketio user....connected');
  socket.on('reserve', function(data) {
    seats[data.y][data.x] = 2;
    app.io.emit('reserve', data);
  });
});
// HN need to modify....
exports.seats = seats;

module.exports = app;
