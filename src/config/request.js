/**
 * Created by lhy95 on 2017/5/16.
 */

// 本地开发用
// const baseUrl = 'http://localhost:3000/api/';

// 线上正式版
const baseUrl = 'https://apis.lihuanyu.com/api/';

const API = {
  reg: baseUrl + 'Clients',
  login: baseUrl + 'Clients/login',
  user(userId, accessToken) {return baseUrl + 'Clients/' + userId + '?access_token=' + accessToken},
  logout(accessToken) {return baseUrl + 'Clients/logout?access_token=' + accessToken},
  changePassword(accessToken) {return baseUrl + 'Clients/change-password?access_token=' + accessToken},
  createLive(accessToken) {return baseUrl + 'Lives?access_token=' + accessToken},
  getLiveList: baseUrl + 'Lives',
  getLiveData(clientId) {return baseUrl + 'Clients/' + clientId + '/lives'},
  getLiveById(liveId) {return baseUrl + 'Lives/' + liveId},
  submitComment: baseUrl + 'Comments',
  getLivesComment(liveId) {return baseUrl + 'Lives/' + liveId + '/comments'}
};

module.exports = API;
