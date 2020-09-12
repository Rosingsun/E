var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require("../model/resModel");
const {
    addCollect,
    unCollect,
    getAllCollects,
} =require('../controller/collection');

router.post('/addCollect', (req, res, next) => {
  const {answer_id, user_id} = req.body
  const result = addCollect(answer_id, user_id)
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

router.post('/unCollect', (req, res, next) => {
  const { id } = req.body
  const result = unCollect(id)
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

router.post('/getAllCollects', (req, res, next) => {
  const { user_id } = req.body
  const result = getAllCollects(user_id)
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