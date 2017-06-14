/**
 * Created by lhy95 on 2017/6/6.
 */
import * as types from '../mutation-types'

const state = {
  init: false,
  indexCatalogName: '全部',
  indexCatalog: '7'
}

const getters = {
  init: state => state.init
}

const actions = {}

const mutations = {
  [types.INIT_APPLICATION] (state) {
    state.init = true;
  },
  [types.CHANGE_INDEX_CATALOG] (state, name) {
    state.indexCatalog = name;
    switch (name) {
      case '1':
        state.indexCatalogName = '通信工程';
        break;
      case '2':
        state.indexCatalogName = '软件工程';
        break;
      case '3':
        state.indexCatalogName = '计算机科学与技术';
        break;
      case '4':
        state.indexCatalogName = '物联网';
        break;
      case '5':
        state.indexCatalogName = 'Java';
        break;
      case '6':
        state.indexCatalogName = '前端';
        break;
      case '7':
        state.indexCatalogName = '全部';
        break;
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
