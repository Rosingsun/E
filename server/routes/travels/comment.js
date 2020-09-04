var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require("../../model/resModel");
const {
  addComment,
  deleteComment,
  queryCommentId,
} =require('../../controller/travels/comment');
const { nowDate } = require("../../public/utils/main")

router.post('/addComment', (req, res, next) => {
  const {answer_id, user_id, content,prase_count} = req.body
  const createTime = nowDate()
  const result = addComment(answer_id, user_id, content, createTime,prase_count)
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

router.post('/deleteComment', (req, res, next) => {
  const { comment_id } = req.body
  const result = deleteComment(comment_id)
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

router.post('/queryCommentId', (req, res, next) => {
  const { answer_id } = req.body
  const result = queryCommentId(answer_id)
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