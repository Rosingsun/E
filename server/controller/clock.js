const {exec} = require('../db/mysql')

/**
 * E打卡
 * @param {*} user_id  
 * @param {*} city_id 
 */

const addClock = (user_id,city_id) => {
    let sql = `INSERT INTO clock (user_id,city_id) 
    VALUES (${user_id},${city_id})`
      return exec(sql).then(row =>{
          return row || {}
      })
}

/**
 * 获取用户所有打卡信息
 * @param {*} user_id 当前用户id
 */
const getAllClock = (user_id) => {
    let sql = `SELECT a.*,b.* FROM clock AS a LEFT JOIN city AS b ON a.city_id = b.id where a.user_id=${user_id}`
    console.log(sql)
    return exec(sql).then(row => {
      return row || []
    })
  }

module.exports={
    addClock,
    getAllClock,

}