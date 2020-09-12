var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require("../model/resModel");
const {
   addLiuyan,addReply,getAllmessage,getAllreply
} =require('../controller/message');
const { nowDate } = require("../public/utils/main")

router.post('/addLiuyan', (req, res, next) => {
    const {ly_name,ly_content,ly_for_name} = req.body
    const ly_date = nowDate()
    const result = addLiuyan(ly_name, ly_date, ly_content, ly_for_name)
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

router.post('/addReply', (req, res, next) => {
    const {lr_name,lr_content, lr_for_words} = req.body
    const lr_date = nowDate()
    const result = addReply(lr_name, lr_date, lr_content, lr_for_words)
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

  router.post('/getAllmessage', (req, res, next) => {
    const {ly_name } = req.body
    const result = getAllmessage(ly_name)
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

  router.post('/getAllreply', (req, res, next) => {
    const {lr_name } = req.body
    const result = getAllreply(lr_name)
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
  
module.exports=router;