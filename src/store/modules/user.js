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
  getUserData (context, promise) {
    return new Promise((resolve, reject) => {
      promise.then(
        (res) => {
          console.log(res.data)
        }
      )
    })
  },
  init (context, {path, router}) {
    let userId = localStorage.getItem('userId');
    let accessToken = localStorage.getItem('accessToken');
    if (userId) {
      context.commit(types.SET_TOKEN, {token: accessToken});
      context.commit(types.SET_USERID, {userId: userId});
      router.push(path);
    }
  }
};

// mutations
const mutations = {
  [types.SET_TOKEN] (state, {token}) {
    state.accessToken = token
  },
  [types.SET_USERID] (state, {userId}) {
    state.userId = userId
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
