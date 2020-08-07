var express = require('express');
var router = express.Router();
var db = require("../db/db");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index.html', { title: 'ExpressTitle' });
// });

router.get('/list', function (req, res, next) {
  db.query('select * from list', function (err, data) {
    // console.log('==========');
        if (err) {
            console.log('连接出错')
        } else {
          res.send({'list':data})
        }
    })
});
module.exports = router;
