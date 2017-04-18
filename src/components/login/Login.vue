<template>
  <div class="login">
    <div class="login-panel">
      <Form :model="formRight" label-position="top">
        <Form-item>
          <Input v-model="formRight.name" placeholder="Username"></Input>
        </Form-item>
        <Form-item prop="password">
          <Input v-model="password" placeholder="Password"></Input>
        </Form-item>
        <Button type="primary" long v-on:click="handleLogin">Login</Button>
        <p class="text forget">Forgot password?</p>
        <p class="text reg">Do not have an account?</p>
        <Button type="ghost" long v-on:click="changeToReg">Sign in</Button>
      </Form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        formRight: {}
      }
    },
    methods: {
      changeToReg () {
          this.$router.push('/reg')
      },
      handleLogin () {}
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
      /*background-color: #fff;*/
      width: 350px;
      padding: 20px;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .text {
        font-size: 12px;
        text-align: center;
      }

      .forget {
        margin-top: 15px;
        color: #317ffe;
        cursor: pointer;
      }

      .reg {
        margin-bottom: 15px;
      }
    }
  }
</style>
