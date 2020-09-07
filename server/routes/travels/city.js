var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require("../../model/resModel");
const {
  queryAllScenic_Spots,
  queryScenic_Spots
} =require('../../controller/travels/city');

router.post('/queryAllScenic_Spots',function(req,res,next){
    const result = queryAllScenic_Spots()
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

router.post('/queryScenic_Spots',function(req,res,next){
    const {Name, City, Scenic_Spots, Position} = req.body
    const result = queryScenic_Spots(Name, City, Scenic_Spots, Position);
    const resultData = result.then(data=>{
        if(data){
            return new SuccessModel(data)
        }
        return new ErrorModel('异常错误')
    })
    resultData.then(data => {
        res.json(data)
    })
})

module.exports = router;