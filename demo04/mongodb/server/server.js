let express = require('express');


//消息体解析中间件
var bodyParser = require('body-parser')
//实例化 
let app = express();
app.use(bodyParser.urlencoded({ extended: false }))//extended为false表示使用querystring来解析数据，这是URL-encoded解析器
// parse application/json 
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Allow-Content-Type", "*");
  next();
})

//简单设置首页
app.get("/", (req, res) => {
    res.send("test api")
  })

//设置监听端口号
app.listen(3000, () => {
    console.log('server start:', "http://10.0.2.2:3000/index");
  })

  const MongoClient = require('mongodb').MongoClient;
  const assert = require('assert');
const { request } = require('http');
  // Connection URL
  const url = 'mongodb://localhost:27017';



//数据查询
app.get('/index', async (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("user");
      dbo.collection("users").find({}).toArray(function (err, result) {
        if (err) throw err;
        res.send({ result });
        console.log(result)
        db.close();
      
      })
    })

  })


// 数据存储
app.post('/insert', async (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
      if (err) throw err; 
      var dbo = db.db("user");
      // var myobj =req.body.response;
      console.log("req.body+"+req.body)
      var myobj =req.body;
      dbo.collection("GaoXueTang").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        console.log(111)
        db.close();
      });
    })
  });

  app.post('/speach', async (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
      if (err) throw err; 
      var dbo = db.db("user");
      // var myobj =req.body.response;
      console.log("req.body+"+req.body)
      var myobj =req.body;
      dbo.collection("GaoXueTang").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        console.log(111)
        db.close();
      });
    })
  });

  //论坛查询
app.get('/speach/get', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user");
    dbo.collection("users").find({}).toArray(function (err, result) {
      if (err) throw err;
      res.send({ result });
      console.log(result)
      db.close();
    
    })
  })

})
