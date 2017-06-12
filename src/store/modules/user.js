/**
 * Created by lhy95 on 2017/4/6.
 */
import * as types from '../mutation-types'

const state = {
  accessToken: '',
  userId: '',
  userData: {}
};

// getters
const getters = {
  accessToken: state => state.accessToken,
  userId: state => state.userId,
  userData: state => state.userData
};

// actions
const actions = {
  doLogin (context, promise) {
    return new Promise((resolve, inject) => {
      promise.then(
        (res) => {
          if (res.ok === true) {
            localStorage.setItem('accessToken', res.data.id);
            localStorage.setItem('userId', res.data.userId);
            context.commit(types.SET_TOKEN, {token: res.data.id});
            context.commit(types.SET_USERID, {userId: res.data.userId});
            resolve();
          }
          else {
            inject();
          }
        },
        () => {
          inject();
        }
      )
    })
  },
  doLogout (context, promise) {
    context.commit(types.USER_LOGOUT);
    if (promise === undefined) {
      return;
    }
    return new Promise((resolve, reject) => {
      promise.then(
        (res) => {
          if (res.ok === true) {
            resolve();
          } else {
            reject();
          }
        },
        () => {
          reject()
        }
      )
    })
  },
  getUserData (context, promise) {
    return new Promise((resolve, reject) => {
      promise.then(
        (res) => {
          if (res.ok === true) {
            context.commit(types.SET_USERDATA, {userData: res.data});
            resolve();
          } else {
            reject();
          }
        },
        () => {reject()}
      )
    })
  },
  init (context, {path, router}) {
    let userId = localStorage.getItem('userId');
    let accessToken = localStorage.getItem('accessToken');
    if (userId) {
      context.commit(types.SET_TOKEN, {token: accessToken});
      context.commit(types.SET_USERID, {userId: userId});
      context.commit(types.INIT_APPLICATION);
      router.push(path);
    }
  },
  changePassword (context, promise) {
    return new Promise((resolve, reject) => {
      promise.then(
        (res) => {
          if (res.ok === true) {
            // 成功
            context.commit(types.USER_LOGOUT);
            resolve();
          } else {
            // 失败
            reject();
          }
        },
        () => {
          // 失败
          reject();
        }
      )
    })
  }
};

// mutations
const mutations = {
  [types.SET_TOKEN] (state, {token}) {
    state.accessToken = token
  },
  [types.SET_USERID] (state, {userId}) {
    state.userId = userId
  },
  [types.SET_USERDATA] (state, {userData}) {
    state.userData = userData
  },
  [types.USER_LOGOUT] (state) {
    state.userData = {};
    state.accessToken = '';
    state.userId = '';
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
