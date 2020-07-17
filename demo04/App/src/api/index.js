import { request } from '../utils/apiHelp'
// 登录
export async function test(data={}) {
    return request({
      url:'/post',
      method:'GET',
      data
    })
};

export async function userCount(data={}) {
  return request({
    url:'/index',
    method:'POST',
    data:data
  })
}