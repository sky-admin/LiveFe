/**
 * Created by lhy95 on 2017/5/16.
 */

// 本地开发用
const baseUrl = 'http://localhost:3000/api/';

// 线上正式版
// const baseUrl = 'https://apis.lihuanyu.com/api/';

const API = {
  reg: baseUrl + 'Users',
  login: baseUrl + 'Users/login'
};

module.exports = API;
