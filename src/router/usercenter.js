/**
 * Created by lhy95 on 2017/6/11.
 */
import UserCenter from '../components/usercenter/UserCenter.vue';
import Profile from '../components/usercenter/UserMainPanel.vue';
import ChangePassword from '../components/usercenter/ChangePassword.vue';
import BeAnchor from '../components/usercenter/BeAnchor.vue';
import AnchorPanel from '../components/usercenter/AnchorPanel.vue';
import Collection from '../components/usercenter/Collection.vue';
import Record from '../components/usercenter/Record.vue';

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
    },
    {
      path: 'anchor',
      name: 'anchorPanel',
      component: AnchorPanel
    },
    {
      path: 'collection',
      name: 'collection',
      component: Collection
    },
    {
      path: 'record',
      name: 'record',
      component: Record
    }
  ]
}
