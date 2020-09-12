const { exec } = require('../../db/mysql')

/**
 * 发布文章
 * @param {*} title 标题
 * @param {*} words 文字介绍
 * @param {*} username 昵称
 * @param {*} createTime 创建时间
 * @param {*} showUserImg 图片url
 * @param {*} user_id  用户id
 * @param {*} location  定位
 */
const release = (title, words, username, createTime, showUserImg,user_id,location) => {
    let sql = `INSERT INTO travels (title, words ,username, createTime,showUserImg,user_id,location) 
              VALUES ( '${title}' , '${words}', '${username}', '${createTime}', '${showUserImg}',${user_id},'${location}')`
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
 * 查询全部
 */
const queryAllRelease = () => {
  let sql = `SELECT * FROM travels`
  return exec(sql).then(row => {
    return row || []
  })
}
 
/**
 * 根据定位查询文章
 * @param {*} location
 */
const queryReleaseLocation = (location) => {
  let sql = `SELECT * FROM travels WHERE location=${location}`
  return exec(sql).then(row => {
    return row || []
  })
}

/**
 * 根据关注的用户查询文章
 * @param {*} user_id
 */
const queryReleaseUserId = (user_id) => {
  let sql = `SELECT a.*, b.followed_user FROM travels as a LEFT JOIN follow as b ON a.user_id=b.follow_user WHERE a.user_id=${user_id}`
  return exec(sql).then(row => {
    return row || []
  })
}

/**
 * 根据id查询文章
 * @param {*} user_id
 */
const queryReleaseId = (user_id) => {
  let sql = `SELECT * FROM travels WHERE user_id=${user_id}`
  return exec(sql).then(row => {
    return row || []
  })
}

const queryReleaseanswerId = (answer_id) => {
  let sql = `SELECT * FROM travels WHERE answer_id=${answer_id}`
  return exec(sql).then(row => {
    return row || []
  })
}


  module.exports = {
    release,
    deleteRelease,
    updataRelease,
    queryAllRelease,
    queryReleaseLocation,
    queryReleaseUserId,
    queryReleaseId,
    queryReleaseanswerId
  }