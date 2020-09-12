const { exec } = require('../../db/mysql')

/**
 * 模糊查询
 * 根据条件查询景点
 * @param {*} Name 景点名字
 * @param {*} City 城市
 * @param {*} Scenic_Spots 位置
 * @param {*} longitude 坐标经度
 */

const queryScenic_Spots = (Name, City, Scenic_Spots, longitude,latitude) => {
    let sql = `SELECT * FROM city `
    if (City !== undefined) {
        sql += `WHERE City like '%${City}%' `
    }
    if (Name !== undefined) {
        sql += `WHERE Name like '%${Name}%' `
    }
    if (Scenic_Spots !== undefined) {
        sql += `WHERE Scenic_Spots like '%${Scenic_Spots}%' `
    }
    if (longitude !== undefined) {
        sql += `WHERE longitude like %${longitude}% `
    }
    if (latitude !== undefined) {
        sql += `WHERE latitude like %${latitude}% `
    }
    // console.log(sql)
    return exec(sql).then(row => {
        return row[0] || {}
    })
}

const queryAllScenic_Spots = () => {
    let sql = 'SELECT * FROM city where id<10'
    // console.log(sql)
    return exec(sql).then(row => {
      return row || []
    })
  }
module.exports={
    queryAllScenic_Spots,
    queryScenic_Spots,
}
