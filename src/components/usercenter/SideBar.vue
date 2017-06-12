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
      <Menu-item name="3" v-if="isAnchor">
        <Icon type="heart"></Icon>
        我要当主播
      </Menu-item>
      <Menu-item name="4" v-if="isAnchor">
        <Icon type="heart"></Icon>
        我的直播
      </Menu-item>
      <Menu-item name="5">
        <Icon type="heart"></Icon>
        我的收藏
      </Menu-item>
      <Menu-item name="6">
        <Icon type="heart"></Icon>
        观看记录
      </Menu-item>
    </Menu-group>
  </Menu>
</template>

<script>
  export default {
    computed: {
      isAnchor() {
        return this.$store.state.user.userData.isAnchor !== undefined ? this.$store.state.user.userData.isAnchor : false;
      }
    },
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
            this.$router.push('/usercenter/beanchor');
            break;
          case '4':
            this.$router.push('/usercenter/anchor');
            break;
          case '5':
            this.$router.push('/usercenter/collection');
            break;
          case '6':
            this.$router.push('/usercenter/record');
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
          case '/usercenter/beanchor':
            this.activeItem = '3';
            break;
          case '/usercenter/anchor':
            this.activeItem = '4';
            break;
          case '/usercenter/collection':
            this.activeItem = '5';
            break;
          case '/usercenter/record':
            this.activeItem = '6';
            break;
        }
      }
    }
  }
</script>

<style>

</style>
