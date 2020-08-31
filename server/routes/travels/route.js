var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require("../../model/resModel");
const {
  create_route,
  queryRouteId
} =require('../../controller/travels/route');

router.post('/create_route', (req, res, next) => {
  const { choose_city,add_punch,route_name,expected_duration,remarks} = req.body
  const result = create_route(choose_city,add_punch,route_name,expected_duration,remarks)
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
  const { id } = req.body
  const result = queryRouteId(id)
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