<template>
  <div class="login">
    <div class="login-panel">
      <h1 class="logo">寰宇直播</h1>
      <Form :model="formRight" label-position="top">
        <Form-item>
          <Input v-model="formRight.name" placeholder="用户名"></Input>
        </Form-item>
        <Form-item prop="password">
          <Input type="password" v-model="formRight.password" placeholder="密码"></Input>
        </Form-item>
        <Button type="primary" long v-on:click="handleLogin">登录</Button>
        <p class="text forget">忘记密码?</p>
        <p class="text reg">还没有账号?</p>
        <Button type="ghost" long v-on:click="changeToReg">注册</Button>
        <Button class="back" type="ghost" long v-on:click="backToIndex">返回主页</Button>
      </Form>
    </div>
  </div>
</template>

<script>
  import API from '../../config/request'
  export default {
    name: 'login',
    data () {
      return {
        formRight: {}
      }
    },
    methods: {
      changeToReg() {
        this.$router.push('/reg')
      },
      handleLogin() {
        let postData = {
          username: this.formRight.name,
          password: this.formRight.password
        };
        let promise = this.$http.post(API.login, postData);
        this.$store.dispatch('doLogin', promise).then(
          () => {
            this.$Notice.success({title: '登录成功！'});
            this.$router.push('usercenter');
          },
          () => {
            this.$Notice.error({title: '登录失败'})
          }
        );
      },
      backToIndex() {
        this.$router.push('/')
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
      /*background-color: #fff;*/
      width: 350px;
      padding: 20px;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .logo {
        font-size: 60px;
        color: #e0e0e0;
        text-align: center;
        margin-bottom: 40px;
      }

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

      .back {
        margin-top: 20px;
      }
    }
  }
</style>
