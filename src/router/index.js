import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/Login.vue'
import Register from '../components/register/Register.vue'
import Index from '../components/index/Index.vue'
import Live from '../components/live/Live.vue'
import UserCenter from '../components/usercenter/UserCenter.vue';
import Profile from '../components/usercenter/UserMainPanel.vue';
import ChangePassword from '../components/usercenter/ChangePassword.vue';
import BeAnchor from '../components/usercenter/BeAnchor.vue';
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Register
    },
    {
      path: '/live/:id',
      name: 'live',
      component: Live
    },
    {
      path: '/usercenter',
      name: 'userCenter',
      component: UserCenter,
      redirect: 'usercenter/profile',
      children: [
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        },
        {
          path: 'password',
          name: 'changePassword',
          component: ChangePassword
        },
        {
          path: 'beanchor',
          name: 'toBeAnchor',
          component: BeAnchor
        }
      ]
    }
  ]
})
