import 'es6-promise'
//全局路径
let commonUrl
if (process.env.NODE_ENV === 'androidDev') {
  // commonUrl = '../../mongodb/demo01.json'
  commonUrl = 'http://localhost:3000/'
  // commonUrl = 'https:/192.168.56.1:3000'
} else if (process.env.NODE_ENV === 'prod') {
  commonUrl = 'http://localhost:5000/api'
}
export const baseUrl = () => {
  return commonUrl
}
//解析json
function parseJSON(response) {
  return response.json()
}
//检查请求状态
function checkStatus(response) {
  if (response.status >= 200 && response.status < 500) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}
let isFormData = (v) => {
  return Object.prototype.toString.call(v) === '[object FormData]';
}
export const request = (options = {}) => {
  const { data, url } = options
  options = { ...options }
  options.mode = 'cors'//跨域
  delete options.url
  if (data) {
    delete options.data
    if (isFormData(data)) {
      options.body = data
    } else {
      options.body = JSON.stringify(data)
    }
  }
  if (!options.headers) {
    if (isFormData(data)) {
      options.headers = {}
    } else {
      options.headers = {
        "Accept": "application/json",
        // "Content-Type": 'application/json',
        "Connection": "close",
        "type": "getUserData",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  }
  if (options.method === 'GET') {
    delete options.body
  }
  const result = fetch(commonUrl + url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => ({ err }))
  result.then(res => {
    if (res.status === 403) {
      window.location.href = '/#/';
    }
  })
  return result
}