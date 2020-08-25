var express = require('express');
var router = express.Router();
var fs = require('fs');
var app = require('../app')


// /seatmanager
router.get('/', function(req, res, next) {
  res.render('seats')
});

// /seatmanager/seats
router.get('/seats', function(req, res, next) {
  res.send(app.seats);
})


module.exports = router;
