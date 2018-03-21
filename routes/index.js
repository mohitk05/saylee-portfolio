var express = require('express');
var router = express.Router();

//router.get('/', con.indexFunction);
router.get('/', function(req, res){
  console.log('In /');
  res.send('Main');
});

module.exports = router;
