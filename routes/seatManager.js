var express = require('express');
var router = express.Router();
var fs = require('fs');
var app = require('../app')

<<<<<<< HEAD
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('seatManager');
=======

// /seatmanager
router.get('/', function(req, res, next) {
  res.render('test1')
>>>>>>> feature/Seat-Manager
});

router.get('/seats', function(req, res, next) {
  res.send(app.seats);
})


module.exports = router;
