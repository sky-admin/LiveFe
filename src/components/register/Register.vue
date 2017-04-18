<template>
  <div class="login">
    <div class="login-panel">
      <Form :model="formRight" label-position="top">
        <Form-item>
          <Input v-model="formRight.name" placeholder="Name"></Input>
        </Form-item>
        <Form-item>
          <Input v-model="formRight.email" placeholder="Email"></Input>
        </Form-item>
        <Form-item prop="password">
          <Input v-model="password" placeholder="Password"></Input>
        </Form-item>
        <div style="text-align: center; margin: -8px 0 13px 0;">
          <Checkbox v-model="single">Agree the terms and policy</Checkbox>
        </div>
        <Button type="primary" long v-on:click="handleReg">Sign in</Button>
        <p class="text reg">Already have an account?</p>
        <Button type="ghost" long v-on:click="changeToLogin">Login</Button>
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
      changeToLogin () {
        this.$router.push('/login')
      },
      handleReg () {}
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

      .reg {
        margin-bottom: 15px;
        margin-top: 10px;
      }
    }
  }
</style>
