const {exec} = require('../db/mysql')

/**
 * 关注
 * @param {*} user_id  
 * @param {*} followed_user 关注的人id
 * @param {*} follower 粉丝
 */

const addFollow =(user_id,followed_user) =>{
    let querySql = `SELECT * from follow where user_id = ${user_id} AND followed_user = ${followed_user}`
    let isHaveUid = exec(querySql).then(row=>{
        if(row.length > 0){
            return false
        }else{
            return true
        }
    })
    return isHaveUid.then(data =>{
        if(data){
            let sql =`INSERT INTO follow (user_id,followed_user) VALUES (${user_id},${followed_user})`
            return exec(sql).then(row =>{
                return row || {}
            })
        }else {
            return '已关注'
        }
    })
}

/**
 * 取关
 * @param {*} user_id  
 * @param {*} followed_user 关注的人id
 */

const unFollow = (followed_user) => {
    let sql = `DELETE FROM follow WHERE user_id=${user_id} AND followed_user = ${followed_user}`
    return exec(sql).then(row => {
      return row || []
    })
  }

/**
 * 粉丝数
 * @param {*} user_id  用户id
 * @param {*} followed_user 关注的人id
 */

const getFans = (followed_user) => {
    let sql = `SELECT * FROM follow WHERE followed_user=${followed_user}`
    let countSql = `select count (*) from follow WHERE followed_user=${followed_user}`
    let count = 0
    exec(countSql).then(num => {
    count = num[0]['count (*)']
  })
  return exec(sql).then(row => {
    let rowData = row || []
    let resultData = {
      row: rowData,
      count2: count
    }
    return resultData
  })
}

/**
 * 关注人数
 * @param {*} user_id  
 * @param {*} followed_user 关注的人id
 */

const getFollow = (user_id) => {
    let sql = `SELECT * FROM follow WHERE user_id=${user_id}`
    let countSql = `select count (*) from follow WHERE user_id=${user_id}`
    let count = 0
    exec(countSql).then(num => {
    count = num[0]['count (*)']
  })
  return exec(sql).then(row => {
    let rowData = row || []
    let resultData = {
      row: rowData,
      count1: count
    }
    return resultData
  })
}
module.exports={
   addFollow,  
   unFollow,
   getFans,
   getFollow

}