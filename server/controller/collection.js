const {exec} = require('../db/mysql')

/**
 * 添加E收藏
 * @param {*} answer_id 文章id
 * @param {*} user_id 用户Id
 */
const addCollect = (answer_id, user_id) => {
    let sql = `INSERT INTO collection (answer_id, user_id) 
    VALUES ( ${answer_id} , ${user_id})`
      return exec(sql).then(row =>{
          return row || {}
      })
}

/**
 * 取消收藏
 * @param {*} id 
 */   
const unCollect = (id) => {
    let sql = `DELETE FROM collection WHERE id = ${id}`
    return exec(sql).then(row => {
      return row || []
    })
  }

/**
 * 获取用户所有收藏信息
 * @param {*} user_id 当前用户id
 */
const getAllCollects = (user_id) => {
    let sql = `SELECT a.*,b.* FROM collection AS a LEFT JOIN travels AS b ON a.answer_id = b.answer_id where a.user_id=${user_id}`
    console.log(sql)
    return exec(sql).then(row => {
      return row || []
    })
  }

  module.exports={
      addCollect,
      unCollect,
      getAllCollects,
  }