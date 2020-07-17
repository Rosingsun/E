const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
//更新一条数据
// MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},function(err,db){
//   if(err) throw err;
//   var dbo = db.db("XuLinJie");
//   var whereStr = {"username":'Test'};
//   var updateStr = {$set:{"type":"小胖"}};
//   dbo.collection("users").updateOne(whereStr,updateStr,function(err,res){
//     if(err) throw err;
//     console.log("文档更新成功");
//     db.close();
//   });
// })
//更新多条数据
MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},function(err,db){
    if(err) throw err;
    var dbo = db.db("XuLinJie");
    var whereStr = {"username":'Test'};
    var updateStr = {$set:{"type":"aaa"}};
    dbo.collection("users").updateMany(whereStr,updateStr,function(err,res){
      if(err) throw err;
      console.log("文档更新成功");
      db.close();
    });
  })