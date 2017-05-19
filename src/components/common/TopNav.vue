<template>
  <Menu mode="horizontal" theme="dark" v-on:on-select="handleMenuSelectChange">
    <div class="layout-logo" v-on:click="toIndex">
      <p>寰宇直播</p>
    </div>
    <div class="layout-nav">
      <Menu-item v-if="unauth" name="1">
        登录
      </Menu-item>
      <Menu-item v-if="unauth" name="2">
        注册
      </Menu-item>
      <Menu-item v-if="!unauth" name="4">
        个人中心
      </Menu-item>
      <Menu-item v-if="!unauth" name="3">
        登出
      </Menu-item>
    </div>
  </Menu>
</template>

<script>
  import API from '../../config/request';
  export default {
    computed: {
      unauth() {
        if (this.$store.state.user.userId !== '') {
          return false;
        }
        else {
          return true;
        }
      },
      accessToken() {
        return this.$store.state.user.accessToken;
      }
    },
    created() {

    },
    methods: {
      handleMenuSelectChange(name) {
        switch (name) {
          case '1':
            this.$router.push('/login');
            break;
          case '2':
            this.$router.push('/reg');
            break;
          case '3':
            this.doLogout();
            break;
          case '4':
            this.$router.push('/usercenter');
            break;
        }
      },
      toIndex() {
        this.$router.push('/')
      },
      doLogout() {
        let promise = this.$http.post(API.logout(this.accessToken));
        this.$store.dispatch('doLogout', promise).then(
          () => {
            this.$Notice.success({title: '登出成功！'});
          },
          () => {
            this.$Notice.error({title: '登出失败，是否已登出！'});
          }
        );
        this.$router.push('/');
      }
    }
  }
</script>

<style lang="less" scoped>
  .layout-logo {
    width: 150px;
    height: 40px;
    background: #e3e8ee;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 10px;
    left: 20px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;

    p {
      font-size: 30px;
      color: #5cadff;
    }

  }

  .layout-nav {
    margin: 0 50px;
    float: right;
  }
</style>
