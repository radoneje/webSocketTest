var express = require('express');
var router = express.Router();
var axios= require('axios');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
router.get('/prompt', function(req, res, next) {
  res.render('prompt', { title: 'Express' });
});
router.get('/blocks', async function(req, res, next) {

  var r=await axios.get("http://nar-mar.may24.pro/api/blocksjson/97383731")

  res.json(r.data);
});

module.exports = router;
