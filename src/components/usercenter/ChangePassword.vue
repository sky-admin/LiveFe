<template>
  <div class="change-password-container">
    <Form :model="formItem" :label-width="80">
      <Form-item label="旧密码">
        <Input type="password" v-model="formItem.oldPassword" placeholder="旧密码"></Input>
      </Form-item>
      <Form-item label="新密码">
        <Input type="password" v-model="formItem.newPassword" placeholder="旧密码"></Input>
      </Form-item>
      <Form-item label="确认新密码">
        <Input type="password" v-model="formItem.newPasswordConfirm" placeholder="旧密码"></Input>
      </Form-item>

      <Form-item>
        <Button type="primary" v-on:click="submit">提交</Button>
        <Button type="ghost" style="margin-left: 8px">取消</Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>
  import API from '../../config/request';
  export default {
    data(){
      return {
        formItem: {
          oldPassword: '',
          newPassword: '',
          newPasswordConfirm: ''
        }
      }
    },
    methods: {
      submit() {
        if (this.formItem.newPassword === this.formItem.newPasswordConfirm) {
          let postData = {
            oldPassword: this.formItem.oldPassword,
            newPassword: this.formItem.newPassword
          };
          let accessToken = this.$store.state.user.accessToken;
          let promise = this.$http.post(API.changePassword(accessToken), postData);
          this.$store.dispatch('changePassword', promise).then(
            () => {
              this.$Notice.error({title: '修改密码成功，请重新登录'});
              this.$router.push('/login');
            },
            () => {
              this.$Notice.error({title: '修改失败，原密码是否输错！'});
            }
          )
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .change-password-container {
    max-width: 500px;
    margin: 30px;
  }
</style>
