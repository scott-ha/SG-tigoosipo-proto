var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('userlog', { title: 'Express' });
  res.render('part/admin-nav', { title: 'Express' });

});

module.exports = router;
