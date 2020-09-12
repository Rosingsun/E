var express = require('express');
var router = express.Router();
const JwtUtil = require('../public/utils/jwt');
const { SuccessModel, ErrorModel } = require("../model/resModel");
const {login,updataPassword,updataPersonal,reg,integral } = require("../controller/users")

/* GET users listing. */
router.post('/login', function(req, res, next) {
  const {uid, password } = req.body
  const result = login(uid,password );
  const resultData = result.then(data => {
      // console.log(data)
      if (data.uid) {
          // 将用户信息传入并生成token
          delete data.password
          const tokenData = data
          let jwt = new JwtUtil(tokenData);
          let token = jwt.generateToken();
          data.token = token
          return new SuccessModel(data)
      }
      return new ErrorModel('登录失败')
  })
  resultData.then(data => {
      res.json(data)
  })
});

router.post('/reg',function(req,res,next){
   const {uid,password,sex} = req.body
   const result = reg(uid,password,sex);
   const resultData = result.then(data=>{
     if(data === '该账号已存在'){
       return new ErrorModel('该账号已存在')
     }else if(data){
       return new SuccessModel(data)
     }
     return new ErrorModel('异常错误')
   })
   resultData.then(data=>{
     res.json(data)
   })
})

router.post('/updataPersonal', (req, res) => {
  const { username, sex, head, PersonalSignature} = req.body
  const result = updataPersonal(username, sex, head, PersonalSignature);
  const resultData = result.then(data => {
      // console.log(data)
      if (data.username) {
          // 将用户信息传入并生成token
          delete data.password
          const tokenData = data
          let jwt = new JwtUtil(tokenData);
          let token = jwt.generateToken();
          data.token = token
          return new SuccessModel(data)
      }
      return new ErrorModel('异常错误')
  })
  resultData.then(data => {
      res.json(data)
  })
})

router.post('/updataPassword', (req, res) => {
  const { oldPassword, newPassword } = req.body
  const result = updataPassword(oldPassword, newPassword);
  const resultData = result.then(data => {
      if (data === false) {
          return new ErrorModel('密码错误')
      }else if (data === '修改成功') {
          return new SuccessModel(data)
      }
      return new ErrorModel('异常错误')
  })
  resultData.then(data => {
      res.json(data)
  })
})

router.post('/integral',(req,res) => {
  const result = integral();
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
