var express = require('express');
var router = express.Router();
//引入数据库包
var path = require('path');
/* formidable用于解析表单数据，特别是文件上传 */
var formidable = require('formidable');
var db = require("../db/db");
/**
 * 查询列表页
 */
router.get('/', function (req, res, next) {
  db.query('select * from user', function (err, rows) {
    console.log('==========');
        if (err) {
            res.render('users.html', {title: 'Express', datas: []});  // this renders "views/users.html"
        } else {
            res.render('users.html', {title: 'Express', datas: rows});
        }
    })
});
//登录
router.get('/login', function (req, res) {
    res.render('login.html');
});
router.post('/login', function (req, res) {
    var uid = req.body.uid;
    var password = req.body.password;
    db.query("select * from user where uid = '" + uid + "' and password = '" + password + "'",function(err,rows){
      if(err){
         console.log('err message:', err)
         return
      }else {
        if (rows.length == 1) {
            // console.log('用户名密码匹配成功！')
            res.json({ code: 200, msg: '登录成功' })
        } else {
            // console.log('用户名或密码错误！')
            res.json({ code: 400, msg: '用户名或密码错误！' })
        }
    }
    });
});


//注册
router.get('/reg', function (req, res) {
    res.render('reg.html');     
});
router.post('/reg', function (req, res) {
    var uid = req.body.uid;
    var password = req.body.password;
    var sex   =    req.body.sex;
    if(!uid){
        res.send({code:400,msg:'用户名不能为空'})
        return;
        }else if(!password){
        res.send({code:400,msg:'密码不能为空'})
        return;
        }else if(!/^\w{6,32}$/.test(uid)){
        res.send({code:400,msg:'用户名必须是数字字母下划线，6~32位'})
        return;
        }else if(!/^.{6,16}$/.test(password)){
        res.send({code:400,msg:'密码6~16位'})
        return;
        }  
        db.query("insert into user(uid,password,sex) values('" + uid + "'," + password + ","+ sex +")", function (err, rows) {
                  if(err){
                      res.json({code:400,msg:'注册失败'})
                  }else{
                      res.json({code:200,msg:'注册成功'})
                  }
                
        }); 
});

//添加留言
router.get('/list', function (req, res) {
    res.render('list.html');
});
router.post('/list',function(req,res){
    var content = req.body.content;
    db.query("insert into list(content) values('" + content + "')",function(err,rows){
        if(err){
            res.json({code:400,msg:'发送失败'});
        } else {
            res.json({code:200,msg:'发送成功'});
        }    
})
});

/**
 * 删
 */
router.get('/del/:id', function (req, res) {
    var id = req.params.id;
    db.query("delete from user where id=" + id, function (err, rows) {
        if (err) {
            res.end('删除失败：' + err)
        } else {
            res.redirect('/users')
        }
    });
});
/**
 * 修改个人中心
 * 
 */
router.get('/toUpdate/:id', function (req, res) {
    var id = req.params.id;
    db.query("select * from user where id=" + id, function (err, rows) {
        if (err) {
            res.end('修改页面跳转失败：' + err);
        } else {
            res.render("update.html", {datas: rows});       //直接跳转
        }
    });
});
router.post('/update',  (req, res, next) => {
    const form = formidable({ multiples: true });
    form.uploadDir = "./serverImage";
    form.keepExtensions = true;//保存扩展名
    form.maxFieldsSize = 2 * 1024 * 1024;//上传文件的最大大小
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
    var id = fields.id;
    var uid = fields.uid;
    var password = fields.password;
    var username = fields.username;
    var PersonalSignature = fields.PersonalSignature;
    var head = path.basename(files.head.path);
    db.query("update user set uid='" + uid + "',password='" + password + "',username='" + username + "',PersonalSignature='" + PersonalSignature + "',head='" + head + "' where id=" + id, function (err, rows) {
        if (err) {
            res.end('修改失败：' + err);
        } else {
            res.redirect('/users');
        }
    });
});
});
/**
 * 查询
 */
router.post('/search', function (req, res) {
    var uid = req.body.s_uid;
    var password = req.body.s_password;
  console.log(uid, password);
    var sql = "select * from user";

    if (uid) {
        sql += " and uid='" + uid + "' ";
    }

    if (password) {
        sql += " and password=" + password + " ";
    }
    sql = sql.replace("and","where");
    db.query(sql, function (err, rows) {
        if (err) {
            res.end("查询失败：", err)
        } else {
            res.render("users.html", {title: 'login', datas: rows, s_uid: uid, s_password: password});
        }
    });
});
//上传图片
router.get('/upload', (req, res) => {
    res.render('upload.html');
  });
  
router.post('/upload', (req, res, next) => {
    const form = formidable({ multiples: true });
    form.uploadDir = "./serverImage";
    form.keepExtensions = true;//保存扩展名
    form.maxFieldsSize = 20 * 1024 * 1024;//上传文件的最大大小
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    //   res.json({ fields, files });
        var title = fields.title;
        var words = fields.words;
        var showUserImg =path.basename(files.showUserImg.path);
        db.query("insert into travels (title,words,showUserImg) VALUES('" + title + "','" + words + "','" + showUserImg +"')",function(err, rows){
            if(err){
                res.end('添加失败：' + err);
            } else {
                res.redirect('/users');
            }
        })
    });
  });

module.exports = router;