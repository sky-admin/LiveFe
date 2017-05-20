<template>
  <div class="user-center-container">
    <top-nav></top-nav>
    <div class="main-area">
      <Row>
        <i-col span="5">
          <side-bar></side-bar>
        </i-col>
        <i-col span="19" ref="layout">
          <router-view></router-view>
        </i-col>
      </Row>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import API from '../../config/request';
  import TopNav from '../common/TopNav.vue';
  import vFooter from '../common/Footer.vue';
  import SideBar from './SideBar.vue';
  export default {
    mounted() {
      if (this.userId === '') {
        this.$router.push('login')
      } else if (JSON.stringify(this.$store.state.user.userData) === '{}') {
        this.loadData();
      }
    },
    methods: {
      loadData() {
        let promise = this.$http.get(API.user(this.$store.state.user.userId, this.$store.state.user.accessToken));
        this.$store.dispatch('getUserData', promise);
      }
    },
    components: {
      TopNav,
      vFooter,
      SideBar
    }
  }
</script>

<style lang="less" scoped>
.main-area {
  margin: 40px 15%;
  min-height: 600px;
}
</style>
