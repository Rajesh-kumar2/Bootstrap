var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get('/layout', function(req, res, next) {
  res.render('layout', { title: 'Layout Page' });
});

router.get('/typography', function(req, res, next) {
  res.render('typo', { title: 'Typography Page' });
});

router.get('/others', function(req, res, next) {
  res.render('otherConcepts', { title: 'More Concepts' });
});

module.exports = router;
