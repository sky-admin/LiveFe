<template>
  <div class="login">
    <div class="login-panel">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .login {
    background-color: #eaeaea;
    width: 100vw;
    height: 100vh;

    .login-panel {
      background-color: #fff;
      width: 300px;
    }
  }
</style>
