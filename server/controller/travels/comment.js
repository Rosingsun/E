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
    let querySql = `SELECT a.answer_id, b.answer_id FROM comment as a LEFT JOIN travel as b WHERE a.answer_id=${answer_id}`
    let isHave = exec(querySql).then(row=>{
      if(row.length < 0){
          return false
      }else{
          return true
      }
  })
  return isHave.then(data =>{
    if(data){
      let sql = `INSERT INTO comment (answer_id, user_id ,content, createTime,showUserImg) 
      VALUES ( ${answer_id} , ${user_id}, '${content}', '${createTime}', '${prase_count}')`
        return exec(sql).then(row =>{
            return row || {}
        })
    }else {
        return '不能评论'
    }
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

const queryCommentId = (answer_id)=>{
  let sql = `SELECT a.*, b.answer_id FROM comment as a LEFT JOIN travel as b ON a.answer_id=b.answer_id WHERE a.answer_id=${answer_id}`
  return exec(sql).then(row=>{
    return row || {}
  })
}

  module.exports={
      addComment,
      deleteComment,
      queryCommentId,

  }