const { exec } = require('../../db/mysql')

/**
 * 发表评论
 * @param {*} answer_id 文章id
 * @param {*} user_id 用户Id
 * @param {*} content 评论
 * @param {*} createTime 创建时间
 * @param {*} prase_count 点赞数
 */
const addComment = (answer_id, user_id, content, createTime,prase_count) => {
    let sql = `INSERT INTO comment (answer_id, user_id ,content, createTime,showUserImg) 
              VALUES ( ${answer_id} , ${user_id}, ${content}, '${createTime}', '${prase_count}')`
    return exec(sql).then(row => {
      return row || {}
    })
  }

/**
 * 删除
 * @param {*} comment_id 
 */
const deleteComment = (comment_id) => {
    let sql = `DELETE FROM comment WHERE comment_id = ${comment_id}`
    return exec(sql).then(row => {
      return row || {}
    })
  }

  module.exports={
      addComment,
      deleteComment,
  }