<template>
  <div class="user-center-container">
    <top-nav></top-nav>
    <div class="main-area">
      <Row>
        <i-col span="5">
          <Menu active-name="1" width="auto">
            <Menu-group title="信息管理">
              <Menu-item name="1">
                <Icon type="document-text"></Icon>
                基本信息
              </Menu-item>
              <Menu-item name="2">
                <Icon type="chatbubbles"></Icon>
                修改密码
              </Menu-item>
            </Menu-group>
            <Menu-group title="功能区">
              <Menu-item name="3">
                <Icon type="heart"></Icon>
                我要当主播
              </Menu-item>
              <Menu-item name="4">
                <Icon type="heart-broken"></Icon>
                我的直播
              </Menu-item>
            </Menu-group>
          </Menu>
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
  export default {
    components: {
      TopNav,
      vFooter
    }
  }
</script>

<style lang="less" scoped>
.main-area {
  margin: 40px 15%;
  min-height: 600px;
}
</style>
