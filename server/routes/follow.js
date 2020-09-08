var express = require('express');
var router = express.Router();
const JwtUtil = require('../public/utils/jwt');
const { SuccessModel, ErrorModel } = require("../model/resModel");
const {addFollow,unFollow,getFans,getFollow } = require("../controller/follow")

router.post('/addFollow',function(req,res,next){
    const {user_id,followed_user} = req.body
    const result = addFollow(user_id,followed_user);
    const resultData = result.then(data=>{
      if(data === '该账号已关注'){
        return new ErrorModel('该账号已关注')
      }else if(data){
        return new SuccessModel(data)
      }
      return new ErrorModel('异常错误')
    })
    resultData.then(data=>{
      res.json(data)
    })
 })

 router.post('/unFollow', (req, res, next) => {
    const { followed_user } = req.body
    const result = unFollow(followed_user)
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

  router.post('/getFans', (req, res, next) => {
    const { followed_user } = req.body
    const result = getFans(followed_user)
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

  router.post('/getFollow', (req, res, next) => {
    const { user_id } = req.body
    const result = getFollow(user_id)
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