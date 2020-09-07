const { exec } = require('../../db/mysql')

/**
 * 根据条件查询景点
 * @param {*} Name 景点名字
 * @param {*} City 城市
 * @param {*} Scenic_Spots 位置
 * @param {*} Position 坐标
 */

const queryScenic_Spots = (Name, City, Scenic_Spots, Position) => {
    let sql = 'SELECT Name,City,Scenic_Spots, Position,FROM city'
    if (Name !== undefined) {
        sql += `and a.Name like '%${Name}%' `
    }
    if (City !== undefined) {
        sql += `and a.City like '%${City}%' `
    }
    if (Scenic_Spots !== undefined) {
        sql += `and a.Scenic_Spots like '%${Scenic_Spots}%' `
    }
    if (Position !== undefined) {
        sql += `and a.Position like '%${Position}%' `
    }
    // console.log(sql)
    return exec(sql).then(row => {
        return row || []
    })
}

const queryAllScenic_Spots = () => {
    let sql = `SELECT * FROM city`
    return exec(sql).then(row => {
      return row || []
    })
  }
module.exports={
    queryScenic_Spots,  
    queryAllScenic_Spots 
}
