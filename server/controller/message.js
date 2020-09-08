const {exec} = require('../db/mysql')

/**
 * 留言、私信
 * @param {*} ly_name 留言人name
 * @param {*} ly_content 留言内容
 * @param {*} ly_date 创建时间
 * @param {*} ly_for_name 被留言人name
 */
const addLiuyan = (ly_name, ly_date, ly_content, ly_for_name) => {
    let sql = `INSERT INTO liuyan (ly_name,ly_for_name,ly_content,ly_date) 
    VALUES ( '${ly_name}' , '${ly_for_name}', '${ly_content}', '${ly_date}')`
    console.log(sql)
      return exec(sql).then(row =>{
          return row || {}
      })
}

/**
 * 回复
 * @param {*} lr_name 回复人name
 * @param {*} lr_content 留言内容
 * @param {*} lr_date 创建时间
 * @param {*} lr_for_words 回复内容
 */
const addReply = (lr_name, lr_date, lr_content, lr_for_words) => {
    let sql = `INSERT INTO reply (lr_name,lr_for_words,lr_content,lr_date) 
    VALUES ( '${lr_name}' , '${lr_for_words}', '${lr_content}', '${lr_date}')`
      return exec(sql).then(row =>{
          return row || {}
      })
}

/**
 * 获取当前用户所有私信信息
 * @param {*} ly_name 当前用户id
 */
const getAllmessage = (ly_name) => {
    let sql = `SELECT * FROM liuyan where ly_name='${ly_name}'`
    console.log(sql)
    return exec(sql).then(row => {
      return row || []
    })
  }

module.exports={
    addLiuyan,
    addReply,
    getAllmessage
}