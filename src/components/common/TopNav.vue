<template>
  <Menu mode="horizontal" theme="dark" v-on:on-select="handleMenuSelectChange">
    <div class="layout-logo">
      <p>寰宇直播</p>
    </div>
    <div class="layout-nav">
      <Menu-item name="1">
        登录
      </Menu-item>
      <Menu-item name="2">
        注册
      </Menu-item>
    </div>
  </Menu>
</template>

<script>
  export default {
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
        }
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

    p {
      font-size: 30px;
      color: #5cadff;
    }

  }

  .layout-nav {
    width: 420px;
    margin: 0 20px;
    float: right;
  }
</style>
