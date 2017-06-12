/**
 * Created by lhy95 on 2017/6/3.
 */
import Vue from 'vue'
import UserMainPanel from '@/components/usercenter/UserMainPanel'
import iView from 'iview';
import store from '../../../src/store';

Vue.use(iView)

describe('UserMainPanel.vue', () => {

  let vm = new Vue({
    store,
    template: '<UserMainPanel/>',
    components: { UserMainPanel }
  })

  it('data is a fuction', () => {
    expect(typeof UserMainPanel.data).to.equal('function')
  })

  it('should render correct contents', () => {
    vm.$nextTick(function () {
      expect(vm.$el.querySelector('.title').textContent)
        .to.equal('欢迎来到个人中心')
    });
  })
})
