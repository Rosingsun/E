const { exec } = require('../../db/mysql')

/**
 * 创建路线
 * @param {*} choose_city 选择城市
 * @param {*} add_cityid 添加打卡点
 * @param {*} route_name 路线名称
 * @param {*} expected_duration 预计时长
 * @param {*} remarks 备注
 */

const create_route = (choose_city,add_cityid,route_name,expected_duration,remarks,user_id) => {
    let sql = `INSERT INTO create_route (choose_city,add_cityid,route_name,expected_duration,remarks,user_id) 
              VALUES ( '${choose_city}' , ${add_cityid}, '${route_name}', '${expected_duration}', '${remarks}',${user_id})`
    return exec(sql).then(row => {
      return row || {}
    })
  }

  /**
 * 根据路线user_id查询路线信息
 * @param {Number} 路线id
 */
const queryRouteId = (user_id) => {
    let sql = `SELECT a.* , b.username ,c.longitude,c.latitude FROM create_route AS a 
    LEFT JOIN user AS b ON a.user_id=b.user_id
    LEFT JOIN city AS c ON a.add_cityid=c.id WHERE a.user_id=${user_id}`
    return exec(sql).then(row => {
      return row[0] || []
    })
  }

  /**
 * 查询全部路线坐标
 * @param {Number} 路线坐标
 */


  
  
  
module.exports={
    create_route,
    queryRouteId,
}
