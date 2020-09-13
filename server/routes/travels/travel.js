var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
/* formidable用于解析表单数据，特别是文件上传 */
const formidable = require('formidable');
const { SuccessModel, ErrorModel } = require("../../model/resModel");
const {
    release,
  deleteRelease,
  updataRelease,
  queryAllRelease,
  queryReleaseLocation,
  queryReleaseUserId,
  queryReleaseId,
  queryReleaseanswerId,
} = require("../../controller/travels/travel");

const { nowDate } = require("../../public/utils/main")

router.post('/release', (req, res, next) => {
  const showUserImg = req.files
  const { title, words, username,user_id,location} = req.body
  const createTime = nowDate()
  const result = release(title, words, username, createTime, showUserImg,user_id,location)
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
  
router.post('/queryAllRelease', (req, res, next) => {
    const result = queryAllRelease()
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

  router.post('/queryReleaseLocation', (req, res, next) => {
    const { location } = req.body
    const result =  queryReleaseLocation(location)
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

  router.post('/queryReleaseUserId', (req, res, next) => {
    const { user_id } = req.body
    const result =  queryReleaseUserId(user_id)
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

  router.post('/queryReleaseId', (req, res, next) => {
    const { user_id } = req.body
    const result =  queryReleaseId(user_id)
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

  router.post('/queryReleaseanswerId', (req, res, next) => {
    const { answer_id } = req.body
    const result =  queryReleaseanswerId(answer_id)
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