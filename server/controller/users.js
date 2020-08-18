const {exec} = require('../db/mysql')

const login = (uid,password) => {
    let queryTable = 'user'
    let sql = `SELECT * FROM user where uid='${uid}' and password='${password}'`
    return exec(sql).then(row=>{
        return row[0] || {}
    })
}
/**
 * 注册
 * @param {*} uid  账号
 * @param {*} password 密码
 * @param {*} sex 性别
 */

const reg =(uid,password,sex) =>{
    let querySql = `SELECT * from user where uid = '${uid}'`
    let isHaveUid = exec(querySql).then(row=>{
        if(row.length > 0){
            return false
        }else{
            return true
        }
    })
    return isHaveUid.then(data =>{
        if(data){
            let sql =`INSERT INTO user (uid, password,sex) VALUES ('${uid}', '${password}', ${sex})`
            return exec(sql).then(row =>{
                return row || {}
            })
        }else {
            return '该账号已存在'
        }
    })
}
  

const queryAllUsers = () => {
    let sql = `SELECT * FROM users`
    return exec(sql).then(row => {
        return row || {}
    })
}

/**
 * 修改个人信息
 * @param {*} username 姓名
 * @param {*} sex 性别
 * @param {*} head 头像
 * @param {*} PersonalSignature 个性签名
 */

 const updataPersonal = (username,sex,head,PersonalSignature) =>{
   let id = global.userInfo.id
   let sql = `UPDATE user SET `
   if (username) {
    sql += `username='${username}',`
}
if (sex > -1) {
    sql += `sex=${sex},`
}
if (headPortraitUrl) {
    sql += `headPortraitUrl='${headPortraitUrl}',`
}
sql = sql.substring(0, sql.length - 1)
sql += ` WHERE id = ${id}`
return exec(sql).then(row=>{
    if(row){
        let personSql = `SELECT * FROM user where id=${id}`
        return exec(personSql).then(row=>{
            return row[0] || {}
        })
    }
    return{}
})
 }

/**
 * 修改密码
 * @param {*} oldPassword 旧密码
 * @param {*} newPassword 新密码
 */
const updataPassword = (oldPassword, newPassword) => {
    let id = global.userInfo.id
    let passwordSql = `SELECT * FROM user where id = ${id}`
    let sql = `UPDATE user SET password = ${newPassword} where id = ${id}`
    let sqlOldPassword = exec(passwordSql).then(row => {
        return row[0].password || ''
    })
    return sqlOldPassword.then(sqlOldPassword => {
        if (sqlOldPassword === oldPassword) {
            return exec(sql).then(row => {
                return '修改成功'
            })
        }else {
            return false
        }
    })
} 

module.exports = {
    login,
    reg,
    queryAllUsers,
    updataPersonal,
    updataPassword,
}
