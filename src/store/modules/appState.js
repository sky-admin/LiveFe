/**
 * Created by lhy95 on 2017/6/6.
 */
import * as types from '../mutation-types'

const state = {
  init: false
}

const getters = {
  init: state => state.init
}

const actions = {}

const mutations = {
  [types.INIT_APPLICATION] (state) {
    state.init = true;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
