const env = process.env.NODE_ENV || 'production'

//配置
let MYSQL_CONF
if (env === 'development') {
    MYSQL_CONF = {
        host: "localhost",
        user: "root",
        password: "root",
        port: "3306",
        database: "shop",
        dateStrings: true
    }
}

if (env === 'production') {
    MYSQL_CONF = {
        host: "localhost",
        user: "root",
        password: "root",
        port: "3306",
        database: "shop",
        dateStrings: true
    }
}
module.exports = { MYSQL_CONF }