/**
 * Created by lhy95 on 2017/4/6.
 */
import * as types from '../mutation-types'

const state = {
  accessToken: ''
};

// getters
const getters = {
  token: state => state.token
};

// actions
const actions = {
  doLogin (context, promise) {
    return new Promise((resolve, inject) => {
      promise.then(
        (res) => {
          if (res.ok === true) {
            localStorage.setItem('accessToken', res.data.id);
            context.commit(types.SET_TOKEN, {token: res.data.id});
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
  }
};

// mutations
const mutations = {
  [types.SET_TOKEN] (state, {token}) {
    state.accessToken = token
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
