<template>
  <div class="login">
    <div class="login-panel">
      <h1 class="logo">寰宇直播</h1>
      <Form :model="formRight" label-position="top">
        <Form-item>
          <Input v-model="formRight.name" placeholder="用户名"></Input>
        </Form-item>
        <Form-item>
          <Input v-model="formRight.email" placeholder="邮箱"></Input>
        </Form-item>
        <Form-item prop="password">
          <Input v-model="formRight.password" placeholder="密码"></Input>
        </Form-item>
        <div style="text-align: center; margin: -8px 0 13px 0;">
          <Checkbox v-model="agree">同意各项协议</Checkbox>
        </div>
        <Button type="primary" long v-on:click="handleReg">注册</Button>
        <p class="text reg">已经注册账号?</p>
        <Button type="ghost" long v-on:click="changeToLogin">登录</Button>
        <Button class="back" type="ghost" long v-on:click="backToIndex">返回主页</Button>
      </Form>
    </div>
  </div>
</template>

<script>
  import API from '../../config/request';
  export default {
    name: 'login',
    data () {
      return {
        formRight: {},
        agree: false
      }
    },
    methods: {
      changeToLogin () {
        this.$router.push('/login')
      },
      handleReg () {
        // TODO：表单校验
        if (this.agree !== true) {
          this.$Notice.error({
            title: '请同意相关协议和条款'
          });
          return;
        }

        let postData = {
          username: this.formRight.name,
          password: this.formRight.password,
          email: this.formRight.email
        };
        this.$http.post(API.reg, postData).then(
          (res) => {
            console.log(res);
            if (res.ok === true) {
              // 注册成功
              this.$Notice.success({
                title: '注册成功，请登录！'
              });
              this.$router.push('login')
            } else {
              this.$Notice.error({
                title: '注册失败'
              });
            }
          },
          () => {
            this.$Notice.error({
              title: '注册失败'
            });
          }
        )
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

      .reg {
        margin-bottom: 15px;
        margin-top: 10px;
      }

      .back {
        margin-top: 20px;
      }
    }
  }
</style>
