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
      <Menu-item v-if="!unauth" name="3">
        登出
      </Menu-item>
    </div>
  </Menu>
</template>

<script>
  export default {
    computed: {
      unauth() {
        if (this.$store.state.user.userId !== '') {
          return false;
        }
        else {
          return true;
        }
      }
    },
    created() {

    },
    methods: {
      handleMenuSelectChange(name) {
        switch (name) {
          case '1':
            this.$router.push('login');
            break;
          case '2':
            this.$router.push('reg');
            break;
          case '3':
            // 登出逻辑
            break;
        }
      },
      toIndex() {
        this.$router.push('/')
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
