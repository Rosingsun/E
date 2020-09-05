const { exec } = require('../../db/mysql')

/**
 * 创建路线
 * @param {*} choose_city 选择城市
 * @param {*} add_punch 添加打卡点
 * @param {*} route_name 路线名称
 * @param {*} expected_duration 预计时长
 * @param {*} remarks 备注
 */

const create_route = (choose_city,add_punch,route_name,expected_duration,remarks) => {
    let sql = `INSERT INTO create_route (choose_city,add_punch,route_name,expected_duration,remarks) 
              VALUES ( '${choose_city}' , '${add_punch}', '${route_name}', '${expected_duration}', '${remarks}')`
    return exec(sql).then(row => {
      return row || {}
    })
  }

  /**
 * 根据路线id查询路线信息
 * @param {Number} 路线id
 */
const queryRouteId = (id) => {
    let sql = `SELECT a.* , b.username AS username FROM create_route AS a LEFT JOIN user AS b ON a.user_id=b.user_id where a.id=${id}`
    return exec(sql).then(row => {
      return row[0] || []
    })
  }

  
  
module.exports={
    create_route,
    queryRouteId,
}
