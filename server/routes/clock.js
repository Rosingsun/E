var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require("../model/resModel");
const {
   addClock,
   getAllClock,
} =require('../controller/clock');

router.post('/addClock', (req, res, next) => {
  const {user_id,city_id} = req.body
  const result = addClock(user_id,city_id)
  const resultData = result.then(data => {
    if (data) {
      return new SuccessModel(data)
    }
    return new ErrorModel('异常错误')
  })
  resultData.then(data => {
    res.json(data)
  })
})

router.post('/getAllClock', (req, res, next) => {
  const { user_id } = req.body
  const result = getAllClock(user_id)
  const resultData = result.then(data => {
    if (data) {
      return new SuccessModel(data)
    }
    return new ErrorModel('异常错误')
  })
  resultData.then(data => {
    res.json(data)
  })
})


module.exports = router;