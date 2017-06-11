/**
 * Created by lhy95 on 2017/6/11.
 */
import UserCenter from '../components/usercenter/UserCenter.vue';
import Profile from '../components/usercenter/UserMainPanel.vue';
import ChangePassword from '../components/usercenter/ChangePassword.vue';
import BeAnchor from '../components/usercenter/BeAnchor.vue';

export default {
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
