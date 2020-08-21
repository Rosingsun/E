const { exec } = require('../../db/mysql')

/**
 * 发布文章
 * @param {*} title 标题
 * @param {*} words 文字介绍
 * @param {*} username 昵称
 * @param {*} createTime 创建时间
 * @param {*} showUserImg 图片url
 * @param {*} user_id  用户id
 */
const release = (title, words, username, createTime, showUserImg,user_id) => {
    let sql = `INSERT INTO travels (title, words ,username, createTime,showUserImg,user_id) 
              VALUES ( ${title} , ${words}, ${username}, '${createTime}', '${showUserImg}',${user_id})`
    return exec(sql).then(row => {
      return row || {}
    })
  }

  /**
 * 删除
 * @param {*} answer_id 
 */
const deleteRelease = (answer_id) => {
    let sql = `DELETE FROM travels WHERE answer_id = ${answer_id}`
    return exec(sql).then(row => {
      return row || {}
    })
  }

  /**
 * 修改
 * @param {*} title 标题
 * @param {*} words 文字
 * @param {*} showUserImg 图片
 * @param {*} answer_id 发布id
 */
const updataRelease = (title, words, showUserImg, answer_id) => {
    let sql = `UPDATE travels SET `
    if (title) {
      sql += `title='${title}', `
    }
    if (words) {
      sql += `words='${words}',`
    }
    if (showUserImg) {
      sql += `showUserImg='${showUserImg}',`
    }
    sql = sql.substring(0, sql.length - 1)
    sql += `WHERE answer_id=${answer_id}`
    return exec(sql).then(row => {
      return row || {}
    })
  }
  
  
/**
 * 查询
 */

  module.exports = {
    release,
    deleteRelease,
    updataRelease,
  }