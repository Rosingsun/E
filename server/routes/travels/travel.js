var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require("../../model/resModel");
const {
    release,
  deleteRelease,
  updataRelease,
} = require("../../controller/travels/travel");

const { nowDate } = require("../../public/utils/main")

router.post('/release', (req, res, next) => {
  const { title, words, username,showUserImg} = req.body
  const createTime = nowDate()
  const result = release(title, words, username, createTime, showUserImg)
  const resultData = result.then(data => {
    console.log(data)
    if (data) {
      return new SuccessModel(data)
    }
    return new ErrorModel('异常错误')
  })
  resultData.then(data => {
    res.json(data)
  })
})

router.post('/deleteRelease', (req, res, next) => {
  const { answer_id } = req.body
  const result = deleteRelease(answer_id)
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

router.post('/updataRelease', (req, res, next) => {
    const { title, words, showUserImg, answer_id } = req.body
    const result = updataRelease(title, words, showUserImg, answer_id)
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