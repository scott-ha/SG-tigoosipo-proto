var express = require('express');
var router = express.Router();
var fs = require('fs');
var app = require('../app')


// /seatmanager
router.get('/', function(req, res, next) {
  res.render('test1')
});

router.get('/seats', function(req, res, next) {
  res.send(app.seats);
})


module.exports = router;
