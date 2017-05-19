<template>
  <Menu :active-name="activeItem" width="auto" v-on:on-select="handleMenuSelectChange">
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
</template>

<script>
  export default {
    data() {
      return {
        activeItem: '1'
      }
    },
    created() {
      this.getPath();
    },
    methods: {
      handleMenuSelectChange(name) {
        switch (name) {
          case '1':
            this.$router.push('/usercenter/profile');
            break;
          case '2':
            this.$router.push('/usercenter/password');
            break;
          case '3':
            this.doLogout();
            break;
          case '4':
            this.$router.push('/usercenter');
            break;
        }
      },
      getPath() {
        let path = this.$route.path;
        switch (path) {
          case '/usercenter/profile':
            this.activeItem = '1';
            break;
          case '/usercenter/password':
            this.activeItem = '2';
            break;
        }
      }
    }
  }
</script>

<style>

</style>
