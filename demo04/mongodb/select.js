
selectUser();
function selectUser() {
    let mongodb = require('mongodb');
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');
    // Connection URL
    const url = 'mongodb://localhost:27017';
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("user");
        dbo.collection("users").find({}).toArray(function (err, result) {
            if (err) throw err;
            // resolve(result);
            result.push(result);
            // console.log(result);
            db.close();
        })
    })
}
module.exports = {selectUser};