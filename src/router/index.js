import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/Login.vue'
import Register from '../components/register/Register.vue'
import Index from '../components/index/index.vue'
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
    }
  ]
})
