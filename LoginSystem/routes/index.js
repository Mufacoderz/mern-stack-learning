var express = require('express');
var router = express.Router();

var database = require('../database.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', session: req.session });
});

module.exports = router;
