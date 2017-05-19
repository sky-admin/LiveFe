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
  import TopNav from '../common/TopNav.vue';
  import vFooter from '../common/Footer.vue';
  import SideBar from './SideBar.vue';
  export default {
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
