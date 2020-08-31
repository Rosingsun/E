const {exec} = require('../db/mysql')

/**
 * 关注
 * @param {*} user_id  
 * @param {*} followed_user 关注的人
 * @param {*} follower 粉丝
 */

const follow =(followed_user) =>{
    let querySql = `SELECT * from follow where followed_user = '${followed_user}'`
    let isHaveUid = exec(querySql).then(row=>{
        if(row.length > 0){
            return false
        }else{
            return true
        }
    })
    return isHaveUid.then(data =>{
        if(data){
            let sql =`INSERT INTO user (followed_user) VALUES ('${followed_user}')`
            return exec(sql).then(row =>{
                return row || {}
            })
        }else {
            return '已关注'
        }
    })
}

module.exports={
   follow,
    
}