var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require("../../model/resModel");
const {
  create_route,
  queryRouteId,
  queryAllRoute
} =require('../../controller/travels/route');

router.post('/create_route', (req, res, next) => {
  const { choose_city,add_cityid,route_name,expected_duration,remarks,user_id} = req.body
  const result = create_route(choose_city,add_cityid,route_name,expected_duration,remarks,user_id)
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


router.post('/queryRouteId',function(req,res,next){
  const { user_id } = req.body
  const result = queryRouteId(user_id)
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

router.post('/queryAllRoute',function(req,res,next){
  const result = queryAllRoute()
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